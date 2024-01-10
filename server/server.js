const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// mongoose.connect('mongodb+srv://01fe21bcs180:Sonikanti%402003@database.lvyvjl3.mongodb.net/Wt', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

mongoose.connect('mongodb+srv://Sanjana:sanjana-123@cluster0.ch9bmxf.mongodb.net/medicalhistories/formdatas', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const formDataSchema = new mongoose.Schema({
  addictname: String,
  maritalStatus: String,
  occupation: String,
  age: Number,
  dob: Date,
  dateOfIntake: Date,
  bpl: String,
  yearOfDrinking: Number,
  yearOfExcessiveDrinking: Number,
  presentPatternOfDrinking: String,
  useOfOtherDrugs: String,
  psychiatricProblem: String,
  denial: String,
  physicalProblems: String,
  priorTreatment: String,
  use_of_other_drugs: String,
  motivatingFactor: String,

  issue1: String,
  issue2: String,
  issue3: String,
  issue4: String,
  impression: String,
  actionTaken: String,
  address: String,
  mobNo1: {
    number: Number,
    name: String,
    relation: String
  },
  mobNo2: {
    number: Number,
    name: String,
    relation: String
  },
  mobNo3: {
    number: Number,
    name: String,
    relation: String
  },
  landlineNo1: {
    number: Number,
    name: String,
    relation: String
  },
  remarks: String,

  ಚಿಕಿತ್ಸಾರ್ಥಿಯಹೆಸರು: String,
  ಪಾಲ್ಗೊಳ್ಳಲುದಿನಾಂಕ: Date,
  ಚಿಕಿತ್ಸಾರ್ಥಿಯಹೆಸರು1: String,
  ದಾಖಲುಪಡಿಸಿದವರಹೆಸರು: String,
  ಮೊಬೈಲ: Number,
  
  ಹೆಸರು: String,
  ನಿವಾಸ: String,
  age: String,
  place: String,
  ಸಾಕ್ಷಿದಾರ1: String,
  ನಿವಾಸ1: String,
  ಸಾಕ್ಷಿದಾರ2: String,
  ನಿವಾಸ2: String,
  name1: String,
  age1: String,
  place1: String,
  name2: String,
  age2: String,
  place2: String,

  SpecialNoteವಿಶೇಷಸೂಚನೆ:String,
  name:String,
  MobileNo:Number,
  ದಿನ:Number,
  ತಿಂಗಳು:String,
  ವರ್ಷ:Number,
  Date:Number,
  Month:String,
  Year: Number,
  attenderName1:String,
  attenderName2:String,
  date:Number,
  MonthYear:String,
  sig1:String,
  sig2:String,
  sig3:String,
  sig4:String,
  sig5:String,

  ಚಿಕಿತ್ಸಾರ್ಥಿಯಸಹಿ:String,
  signature1: String,
  signature2: String,
  PhysicalComplications:String,

  signature71: String,
  signature72: String,

  signature21: String,

  signature31:String,
  signature32:String,
  photo:String,

  nm:String,
      ag:String,
      dor:String,
  //     dep:String,
  //     na:String,
  //     can:String,
  //     sti:String,
  //     hal:String,
  //     inh:String,
  //     sub:String,
      a1:String,
      a2:String,
    a3:String,
    a4:String,
    a5:String,
    a6:String,
    a7:String,
    a8:String,
    a9:String,
    a10:String,
    a11:String,
    a12:String,
    a13:String,
    a14:String,
    a15:String,
    a16:String,
    a17:String,
    a18:String,
    a19:String,
    a20:String,
    a21:String,
    a22:String,
    a23:String,
    a24:String,
    a25:String,
    a26:String,
    a27:String,
    a28:String,
    a29:String,
    a30:String,
    a31:String,
    a32:String,
    a33:String,
    a34:String,
    a35:String,
    a36:String,
    a37:String,
    a38:String,
    a39:String,
    a40:String,
    a41:String,
    a42:String,
    a43:String,
    a44:String,
    a45:String,
    a46:String,
    a47:String,
    a48:String,
    a49:String,
    a50:String,
    a51:String,
    a52:String,
    a53:String,
  
    n1: String,
    p1: String,
    p2: String,
    p3: String,
    p4: String,
    p5: String,
    p6: String,
    p7: String,
    p8: String,
    p9: String,
    p10: String,
    p11: String,
    p12: String,
    p13: String,
    p14: String,
    p15: String,
    p16: String,
    p17: String,
    p18: String,
    addictname:String,
    // pulse: String,
    // bp :String,
    // tem  :String,
    // we:String,
    // box1:String,
    // box2:String,
    // box3:String,
    // box4:String,
    // box5:String,
    // inci:String,
    // radio1:String,
    // radio2:String,
    // radio3:String,
    // radio4:String,
    // no1:String,
    // no2:String,
    // no3:String,
    // no4:String,
    // anemia:String,
    // fig:String,
    // glo:String,
    // flu:String,
    // pal:String,
    // peda:String,
    // trem:String,
    // janu:String,
    // loss:String,
    // waste:String,
    // absc:String,
    // halluc:String,
    // manu:String,
    // club:String,
    // spd:String,
    // gynae:String,
    // inj:String,
    t1: String,
    t2: String,
    t3: String,
    t4: String,
    t5: String,
    t6: String,
    t7: String,
    t8: String,
    t9: String,
    t10: String,
    t11: String,
    t12: String,
    t13: String,
    t14: String,
    t15: String,
    t16: String,
    t17: String,
    t18: String,
    t19: String,
    t20: String,
    t21: String,
    t22: String,
    t23: String,
    t24: String,
    t25: String,
    t26: String,
    t27: String,
    t28: String,
    t29: String,
    t30: String,
    t31: String,
    t32: String,
    t33: String,
    t34: String,
    t35: String,
    rc41: String,
    rc42: String,
    rc43: String,
    rc44: String,
    rc45: String,
    rc46: String,
    rc47: String,
    rc48: String,
    rc49: String,
    rc50: String,
    rc51: String,
    rc52: String,
    rc53: String,
    rc54: String,
    rc55: String,
    rc56: String,
    rc57: String,
    rc58: String,
    rc59: String,
    rc60: String,
    rc61: String,
    rc62: String,
    rc63: String,
    rc64: String,
    rc65: String,
    rc66: String,
    rc67: String,
    rc68: String,
    rc69: String,
    rc70: String,
    rc71: String,
    rc72: String,
    rc73: String,
    rc74: String,
    rc75: String,
    rc76: String,
    rc77: String,
    rc78: String,
    rc79: String,
    rc80: String,
    rc1: String,
    rc2: String,
    rc3: String,
    rc4: String,
    rc5: String,
    rc6: String,
    rc7: String,
    rc8: String,
    rc9: String,
    rc10: String,
    rc11: String,
    rc12: String,
    rc13: String,
    rc14: String,
    rc15: String,
    rc16: String,
    rc17: String,
    rc18: String,
    rc19: String,
    rc20: String,
    rc21: String,
    rc22: String,
    rc23: String,
    rc24: String,
    rc25: String,
    rc26: String,
    rc27: String,
    rc28: String,
    rc29: String,
    rc30: String,
    rc31: String,
    rc32: String,
    rc33: String,
    rc34: String,
    rc35: String,
    rc36: String,
    rc37: String,
    rc38: String,
    rc39: String,
    rc40: String,
    fourthname: String,
    age : String,
    dateofad : String,
    his : String,
    phy : String,
    past : String,
    psyc : String,
    with : String,
    tre : String

});

const FormDataModel = mongoose.model('formData', formDataSchema);

let isSaving = false;

app.post('/api/saveFormData/:addictName', async (req, res) => {
  try {
    while (isSaving) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    isSaving = true;

    const formData = req.body;
    const componentName = formData.component;
    const addictName = req.params.addictName;

    let formDataModel;

    formDataModel = await FormDataModel.findOne({ addictname: addictName });
  // ಚಿಕಿತ್ಸಾರ್ಥಿಯಹೆಸರು: 
  //formData.ಚಿಕಿತ್ಸಾರ್ಥಿಯಹೆಸರು

    if (!formDataModel) {
      console.log("formdata null");
      formDataModel = new FormDataModel(formData);
      await formDataModel.save();
    } else {
      for (const key in formData) {
        if (formData[key] !== null && formData[key] !== undefined) {
          formDataModel[key] = formData[key];
        }
      }
    }

    await formDataModel.save();
    res.json({ success: true, data: formDataModel });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  } finally {
    isSaving = false;
  }
});




app.get('/api/getFormData/:addictName', async (req, res) => {
  try {
    const addictName = req.params.addictName;

    // Perform a query to retrieve data based on the addictName
    const formData = await FormDataModel.findOne({ addictname: addictName });

    if (!formData) {
      res.status(404).json({ success: false, error: 'Data not found' });
      return;
    }

    res.json({ success: true, data: formData });
  } catch (error) {
    console.error('Error fetching form data:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




