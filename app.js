const express       = require("express"),
      request       = require("request"),
      bodyParser    = require('body-parser'),
      mongoose      = require('mongoose'),
      path          = require('path');

const app           = express();

const PORT       = process.env.PORT || 3000,
      IP         = process.env.IP;



/**
 * Static Directory
 */

 app.use(bodyParser.urlencoded({extended: true}), express.static("public"));

/**
* View Engine
*/
app.set("view engine", "ejs");

/**
 * View Directory
 */
app.set("views", path.join(__dirname, '/public/views'));


// /**
// * Database
// */

//     /**
//      * Connection
//      */
//         mongoose.connect('mongodb://127.0.0.1/qcportfolio');

//     /**
//      * Schemas
//      */

//         // Message Schema
//         const messageSchema = new mongoose.Schema({
//             firstname: String,
//             email: String,
//             message: String,
//             date: { type: Date, default: Date.now }
//         });

//         // Projects Schema
//         const projectSchema = new mongoose.Schema({
//             title: String,
//             tech: String,
//             description: String,
//             githubLink: String,
//             demoLink: String,
//             image: String,
//             type: String
//         });

//     /**
//      * Models
//      */
//      const Message = mongoose.model("Message", messageSchema),
//            Project = mongoose.model("Project", projectSchema);

/**
 * Get Routes
 */

    // Home
    app.get("/", function(req, res) {
        res.render("home");
    });

    // Admin
    app.get("/admin", function(req, res) {
        res.render("admin");
    });

app.listen(PORT, IP, function() {
    console.log("server listening on PORT: " + PORT);
});
