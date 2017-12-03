var db = require("../DB.js");
var userRouter = require("./userRouter")
var acceptorderRouter = require("./acceptorderRouter.js")
var ProductListRouter = require("./productListRouter.js");
var ProductDetailRouter = require("./productDetailRouter.js");
var CommentRouter = require("./commentRouter.js");
var bodyparser = require('body-parser');
var urlencode = bodyparser.urlencoded({extended: false});

module.exports = {
    Register: function(express){
        var app = express();
        app.all('*', function(req, res, next) {
            // res.writeHead(200, {"Content-Type"})
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
            res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
            res.header("X-Powered-By",' 3.2.1')
            if(req.method=="OPTIONS") {
              res.send(200);/*让options请求快速返回*/
            } else{
              next();
            }
        });
        app.use(bodyparser.json());
        app.use(bodyparser.urlencoded({ extended: false }));

        // PrimaryRuter.Grounding(app, urlencode, db);        
    
        userRouter.Register(app,db);
        acceptorderRouter.Acceptorder(app, db);
        ProductListRouter.ProductList(app, db);
        ProductDetailRouter.ProductDetail(app, db);
        CommentRouter.Comment(app,db);
        app.listen(88);   
    }
}