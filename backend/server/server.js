require('./config/config');

const _ = require('lodash');
const express = require('express');
const cookieParser = require('cookie-parser');

const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { User } = require('./models/user');
const { Layout } = require('./models/layout');

const { authenticate } = require('./middleware/authenticate');
const { authenticateAsAdmin } = require('./middleware/authenticate-as-admin');

const app = express();
const port = 8184;

const apiBase = '/dashboard-api/'

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Will be removed start */

app.get(apiBase + 'addadmin', (req, res) => {
    const user = new User({
        email: 'admin@test.com',
        password: '123456',
        isAdmin: true,
        name: 'admin'
    });

    user.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get(apiBase + 'addtest', (req, res) => {
    const user = new User({
        email: 'testn@test.com',
        password: '123456',
        isAdmin: false,
        name: 'test'
    });

    user.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get(apiBase + 'getinfo', (req, res) => {
    console.log('here');
    res.send('sdfs');

});



/* Will be removed end */

///////////////////////////////////////////////////////////////////////

// ---------------------- USER OPERATIONS ---------------------- //

///////////////////////////////////////////////////////////////////////

app.post(apiBase + 'users', authenticateAsAdmin, (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password,
        ...(typeof req.body.isAdmin === "boolean" && { isAdmin: req.body.isAdmin }),
        ...(typeof req.body.name === "string" && { name: req.body.name })
    });

    user.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});



app.get(apiBase + 'users/:id', authenticateAsAdmin, (req, res) => {
    User.findOne({
        _id: req.params.id
    }).then((user) => {
        if (user) {
            res.send(user);
        } else {
            res.status(400).send('Could not find the user.');
        }
    }, (err) => {
        res.status(500).send(err);
    });
});

app.post(apiBase + 'users/updateMyProfile', authenticate, (req, res) => {
    const userId = req.user._id;
    User.findOneAndUpdate({
        _id: userId
    }, {
        ...(req.body.email && { email: req.body.email }),
        ...(req.body.password && { password: req.body.password }),
        ...(req.body.username && { name: req.body.username })
    }, { new: true }).then((usr) => {
        if (usr) {
            res.send(usr);
        } else {
            res.status(400).send('Could not find the user.');
        }
    });
});



app.post(apiBase + 'login', (req, res) => {
    const body = _.pick(req.body, ['email', 'password']);

    User.findByCredentials(body.email, body.password).then((user) => {
        return user.generateAuthToken().then((token) => {
            res.cookie('sessionCid', token, { maxAge: 86400000, httpOnly: true });
            res.status(200).send({ isA: user.isAdmin, name: user.name, _id: user._id, email: user.email });
        });
    }).catch((e) => {
        res.status(403).send();
    });
});



app.get(apiBase + 'logout', (req, res) => {
    res.clearCookie('sessionCid');
    res.status(200).send();
});




app.get(apiBase + 'checkLogin', (req, res) => {
    let token = null;
    if (req.cookies && req.cookies.sessionCid) {
        token = req.cookies.sessionCid;
    } else {
        res.status(200).send({ caut: false });
        return;
    }

    User.findByToken(token).then((user) => {
        if (!user) {
            res.status(200).send({ caut: false });
            return;
        }
        res.status(200).send({ caut: true, isA: user.isAdmin, name: user.name, _id: user._id, email: user.email });
        return;
    }).catch((e) => {
        res.status(200).send({ caut: false });
        return;
    });
});

///////////////////////////////////////////////////////////////////////

// ---------------------- LAYOUT OPERATIONS ---------------------- //

///////////////////////////////////////////////////////////////////////

app.post(apiBase + 'layouts', (req, res) => {
    const layout = new Layout({
        user: req.body.userId,
        items: req.body.items
    });
    layout.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.patch(apiBase + 'layouts', async (req, res) => {
    const id = req.body.layoutId;
    try {
      const layout = await Layout.findOne({ _id: id });
      layout.items = req.body.items;
      const updatedLayout = await layout.save();
      res.send(updatedLayout);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get(apiBase + 'layouts/user/:id', (req, res) => {

    Layout.findOne({
        user: req.params.id
    }).then((layout) => {
        if (layout) {
            res.send(layout);
        } else {
            res.status(400).send('Could not find the layout of user.');
        }
    }, (err) => {
        res.status(500).send(err);
    });
});


app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});