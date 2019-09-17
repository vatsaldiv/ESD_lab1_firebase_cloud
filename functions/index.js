const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});

try {
    admin.initializeApp();
} catch(error) {
    //TODO: ignoring until firebase-functions fix released
}


exports.setData = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        
        const count = req.query.count;
        const data1 = req.query.data1;
        const data2 = req.query.data2;
        const data3 = req.query.data3;

        const databaseRef = admin.database().ref(`Data/${count}`);

        return new Promise(function(resolve, reject)
        {        

            databaseRef.set({
                data1 : `${data1}`,
                data2 : `${data2}`,
                data3 : `${data3}`
            });

            res.send(`ok`);

         });

             
    });
});
