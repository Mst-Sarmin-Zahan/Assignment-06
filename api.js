const express = require('express');
const router = express.Router();


const controller1 = require('../Controllers/blogController');
const controller2 = require('../Controllers/blogDetailsController');
const controller3 = require('../Controllers/commentController')
const controller4 = require('../Controllers/messageController')
const controller5 = require('../Controllers/portfolioController')
const controller6 = require('../Controllers/productController')
const controller7 = require('../Controllers/profitController')
const controller8 = require('../Controllers/projectController')
const controller9 = require('../Controllers/serviceController')
const controller10 = require('../Controllers/titleController')




router.get('/api/endpoint1', controller1.create1);
router.get('/api/endpoint2', controller1.read1);
router.get('/api/endpoint3', controller1.delete1);
router.get('/api/endpoint4', controller1.update1);

router.get('/api/endpoint5', controller2.create2);
router.get('/api/endpoint6', controller2.read2);
router.get('/api/endpoint7', controller2.delete2);
router.get('/api/endpoint8', controller2.update2);

router.get('/api/endpoint9', controller3.create3);
router.get('/api/endpoint10', controller3.read3);
router.get('/api/endpoint11', controller3.delete3);
router.get('/api/endpoint12', controller3.update3);

router.get('/api/endpoint13', controller4.create4);
router.get('/api/endpoint14', controller4.read4);
router.get('/api/endpoint15', controller4.delete4);
router.get('/api/endpoint16', controller4.update4);

router.get('/api/endpoint17', controller5.create5);
router.get('/api/endpoint18', controller5.read5);
router.get('/api/endpoint19', controller5.delete5);
router.get('/api/endpoint20', controller5.update5);

router.get('/api/endpoint21', controller6.create6);
router.get('/api/endpoint22', controller6.read6);
router.get('/api/endpoint23', controller6.delete6);
router.get('/api/endpoint24', controller6.update6);

router.get('/api/endpoint25', controller7.create7);
router.get('/api/endpoint26', controller7.read7);
router.get('/api/endpoint27', controller7.delete7);
router.get('/api/endpoint28', controller7.update7);

router.get('/api/endpoint29', controller8.create8);
router.get('/api/endpoint30', controller8.read8);
router.get('/api/endpoint31', controller8.delete8);
router.get('/api/endpoint32', controller8.update8);

router.get('/api/endpoint33', controller9.create9);
router.get('/api/endpoint34', controller9.read9);
router.get('/api/endpoint35', controller9.delete9);
router.get('/api/endpoint36', controller9.update9);

router.get('/api/endpoint37', controller10.create10);
router.get('/api/endpoint38', controller10.read10);
router.get('/api/endpoint39', controller10.delete10);
router.get('/api/endpoint40', controller10.update10);


module.exports = router;
