const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');





const app = express();




const PORT = process.env.PORT || 8000;

app.listen(PORT , () => {
    console.log(`app is running on PORT ${PORT}`);
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc, query, where, getDocs } = require('firebase/firestore');
const { log } = require('console');


const firebaseConfig = {
  apiKey: "AIzaSyDaTLRNHduZuPs0DvTbrtwiXmDBnSG5Pao",
  authDomain: "solana-travel-e233b.firebaseapp.com",
  databaseURL: "https://solana-travel-e233b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "solana-travel-e233b",
  storageBucket: "solana-travel-e233b.appspot.com",
  messagingSenderId: "394419137679",
  appId: "1:394419137679:web:602d79621657ab219614fa",
  measurementId: "G-4C94Z63SKB"
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

app.post('/subscribers', async (req,res) => {
    
    try {
        const email = req.body.email;
        if (!email) {
          return res.status(400).json({ message: "Email is required." });
        }
    
        const subscriberCollection = collection(firestore, 'subscribers');
        const q = query(subscriberCollection, where("email", "==", email));
        const querySnapshot = await getDocs(q);
    
        if (!querySnapshot.empty) {
          return res.status(400).json({ message: "Email already subscribed." });
        }
    
        await addDoc(subscriberCollection, { email: email });
        res.status(200).send();
    
      } catch (error) {
        console.error("Error adding subscriber:", error);
        res.status(500).json({ message: "Failed to subscribe" });
      }
});







const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465, 
    secure: true, 
    auth: {
        user: 'ouassimakrem@gmail.com', 
        pass: 'tklz yupe ogso xggq'   
    }
});


app.post('/support_client/send_email', (req, res) => {

    const { email, full_name, phone_number, message } = req.body;

    const mailOptions = {
        from: email, 
        to: 'solanatraveldz@gmail.com', 
        subject: `New Message from ${full_name}`,
        text: `
            Email: ${email}
            Name: ${full_name}
            Phone: ${phone_number}
            Message: ${message}
        `
    };

    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Failed to send email');
        } else {
            console.log('Email sent: ' + info.response);
            return res.status(200).redirect('/support_client');
        }
    });
});


app.use(express.static(path.join(__dirname , '../public/CSS')));
app.use(express.static(path.join(__dirname , '../public/JS')));
app.use(express.static(path.join(__dirname , '../public/PICs')));


//redirections
app.get('/acceuil', (req, res) => {
    res.redirect('/');
  });


//serve HTML pages
app.get('/', (req , res) => {
    res.sendFile('./public/HTML/acceuil.html',{root : path.resolve(__dirname, '..')});
});
app.get('/nos_services', (req , res) => {
    res.sendFile('./public/HTML/nos_services.html',{root : path.resolve(__dirname, '..')});
});
app.get('/support_client', (req , res) => {
    res.sendFile('./public/HTML/support_client.html',{root : path.resolve(__dirname, '..')});
});
app.get('/a_propos', (req , res) => {
    res.sendFile('./public/HTML/a_propos.html',{root : path.resolve(__dirname, '..')});
});
app.use((req,res) => {
    res.status(404).sendFile('./public/HTML/404.html',{root : path.resolve(__dirname, '..')});
});
