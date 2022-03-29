'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    let users = [
      {
          "_id": 4,
          "firstName": "tempFirst",
          "lastName": "tempLast",
          "email": "temp@temp.com",
          "password": "$2b$10$aEx7VyiZy1v4xSptRe6jYeu82i4MU6JxTPrkUMDeCTbgZ8kztPK/W",
          "profileImage": "1647238262625.jpg"
      },
      {
          "_id": 5,
          "firstName": "tempFirst",
          "lastName": "tempLast",
          "email": "temp2@temp.com",
          "password": "$2b$10$esNivZ2WrhvbC0ZQl9bCcuhj/aR6lMus7Tmcu69v7cphYNZA9GnMu",
          "profileImage": null
      },
      {
          "_id": 6,
          "firstName": "temp",
          "lastName": "temp",
          "email": "temp3@temp.com",
          "password": "$2b$10$QfhrPNz2UN/RO151ZaoiFuGxYsJndeO2a42ixoLDAukiKO0x6kKK6",
          "profileImage": null
      },
      {
          "_id": 7,
          "firstName": "temp",
          "lastName": "temp",
          "email": "temp4@temp.com",
          "password": "$2b$10$TfAgMQ8Hh83SJzvYUl4Ld.kKpmzDtsSZoRk8Xr6If8kU5FRyxspDO",
          "profileImage": "1647243521691.jpg"
      },
      {
          "_id": 8,
          "firstName": "Vijay",
          "lastName": "Sadhu",
          "email": "pedom28508@siberpay.com",
          "password": "$2b$10$FnxeliIchTAGfETRDBMtuOiPmWsmI5QgyGmzl9JCdqyA5qmlDeNW2",
          "profileImage": null
      },
      {
          "_id": 9,
          "firstName": "xyz ",
          "lastName": "mush",
          "email": "ADMIN@QWE.COM",
          "password": "$2b$10$/eFASB3137EHxZWprzAus.ePmSCMn8PzTSp.EHSpF3xiPt9EEsDw2",
          "profileImage": null
      },
      {
          "_id": 10,
          "firstName": "admin",
          "lastName": "admin",
          "email": "admin@123.com",
          "password": "$2b$10$aWoLWVFXOJ5EHy1vqv0EcOs3Q1qflZtvTgljEy4lk1PeZbzvFSMMa",
          "profileImage": null
      },
      {
          "_id": 11,
          "firstName": "Mehul ",
          "lastName": "Pandya ",
          "email": "mind@admin.com",
          "password": "$2b$10$vFOUipCqT1jvq98EmeaF/OvwBI.iFdYhvpovEyGMGwO6BL1wQTuVi",
          "profileImage": null
      },
      {
          "_id": 12,
          "firstName": "moto3",
          "lastName": "mpto23",
          "email": "moto@123.com",
          "password": "$2b$10$ocDZEJ4DSzPJY3IS2AwBG.fg7vdGLjxscbGnlkRu41AvBCutjTy0.",
          "profileImage": null
      },
      {
          "_id": 13,
          "firstName": "asdf",
          "lastName": "jhasdhk",
          "email": "mehul@123.com",
          "password": "$2b$10$mMkuRGeCM1FhYpDlRXOppuf8tAx4SzVJc4UTuH3eM.PuRW57WCXR6",
          "profileImage": null
      },
      {
          "_id": 14,
          "firstName": "vimal",
          "lastName": "vimal",
          "email": "vimal@mind.com",
          "password": "$2b$10$If/Hvu4nKdIzqKPFdAwDGePLvgF3Ctg3RXOAesYA3zlPiQzX3XHNy",
          "profileImage": null
      },
      {
          "_id": 15,
          "firstName": "mejhul",
          "lastName": "dsdasd",
          "email": "vimaal@mind.com",
          "password": "$2b$10$dSRWAmyNfVkwYBDd0QikjeLIqqCLCyamS.ZSFzh/GgmxtrscS5ciS",
          "profileImage": null
      },
      {
          "_id": 16,
          "firstName": "asd",
          "lastName": "dfdff",
          "email": "asd@123.com",
          "password": "$2b$10$d4f456P57TgjBmEaBLkFc.UtRWh71XfMC0qWf7jYvbYBNQ5xxkLSa",
          "profileImage": null
      },
      {
          "_id": 17,
          "firstName": "qwerf",
          "lastName": "qwwea",
          "email": "qwe@123.com",
          "password": "$2b$10$i9jpo7SYBGpB3bsrolKY8uPax43hs3H81ovNBzR9iXFkRtamWS5Ty",
          "profileImage": null
      },
      {
          "_id": 18,
          "firstName": "qwe",
          "lastName": "qwer",
          "email": "mail@123.com",
          "password": "$2b$10$.XtInSSHvqtPYjXAhm.Izu/YCOrlhMd58uDIHIf1PubmIbbQ9N6nm",
          "profileImage": null
      },
      {
          "_id": 19,
          "firstName": "qwe",
          "lastName": "wert",
          "email": "admind@123.com",
          "password": "$2b$10$1pbWB2TSzQI8.GHFPFIAyeelep1fQcCDP6gwNnC2pyoQP0lFmrtgi",
          "profileImage": null
      },
      {
          "_id": 20,
          "firstName": "mehul",
          "lastName": "pandya",
          "email": "mehul@mind.com",
          "password": "$2b$10$mZDkyPbIKlU27K.XQUMr2.pN5wkC0G/m845NEH7km/sW9fY.r7xnq",
          "profileImage": null
      },
      {
          "_id": 21,
          "firstName": "mehul",
          "lastName": "pandya",
          "email": "mehuls@mind.com",
          "password": "$2b$10$nhLif2dUgJmXPg7Y9ggZT..fAm3ZzcfS310rB7nvSeHLWnHRicG5i",
          "profileImage": null
      },
      {
          "_id": 22,
          "firstName": "dwsdas",
          "lastName": "dwedf",
          "email": "admssin@123.com",
          "password": "$2b$10$h3K6aE0sxYqunG5.F1EHKOsc0Wibc1sy7ypNGPQl.YukTEZg//gW.",
          "profileImage": null
      },
      {
          "_id": 23,
          "firstName": "mehul ",
          "lastName": "PANDYA",
          "email": "MEHUL@300MIND.COM",
          "password": "$2b$10$B5vO3IA9sXCzikvgwWU21ugrfLqj2cfRg7hWc0IXeg9flcX9vn8im",
          "profileImage": null
      },
      {
          "_id": 24,
          "firstName": "karan",
          "lastName": "pandya",
          "email": "karan@300mind.com",
          "password": "$2b$10$DdwKL6RZ4iSfDfJjK1kuxOt5A6LT7AXwoDdlgLlHIBx9vcwMcjLxm",
          "profileImage": null
      },
      {
          "_id": 25,
          "firstName": "devan",
          "lastName": "dsasd",
          "email": "admins@123.com",
          "password": "$2b$10$vwqmg7Kq3ZKm..P9uKhlYuW7W8uOkZMKnkplRhupYmELke74UW29q",
          "profileImage": null
      },
      {
          "_id": 26,
          "firstName": "vijay",
          "lastName": "Sadhu",
          "email": "vijay@mind.com",
          "password": "$2b$10$GI.KxzExYUDwdPaNP/hJLe4FspDfZohmlOWLt5eydGL5Ct/bhz6FG",
          "profileImage": null
      },
      {
          "_id": 27,
          "firstName": "aseaa",
          "lastName": "dwqdqwd",
          "email": "qwe@2563.com",
          "password": "$2b$10$rlgGGjFIbDMrlzL4mxzoDO67cAfh.XKPfjpNTint0RMSxI02J1gmm",
          "profileImage": null
      },
      {
          "_id": 28,
          "firstName": "edc",
          "lastName": "edc",
          "email": "wsx@dsd.com",
          "password": "$2b$10$TlekDdZ1Ag9.IsjOwAqGt.bNXP.MDDd/mZtRKtoePCttb0RxxOHF2",
          "profileImage": null
      },
      {
          "_id": 29,
          "firstName": "tgb",
          "lastName": "tgbh",
          "email": "ery@56.com",
          "password": "$2b$10$x0iFEOAbVfgdRrVhXeglouspZF2vs9V86xAhwhTaKYYS1w7vbAkmK",
          "profileImage": null
      },
      {
          "_id": 30,
          "firstName": "asas",
          "lastName": "dsd",
          "email": "ert@jk.com",
          "password": "$2b$10$PJeKn9hp7vE5EtmqaTgWPO5YOzReVDTFaAQ5/VzP1gs77XdKfxLTm",
          "profileImage": null
      },
      {
          "_id": 31,
          "firstName": "hdhw",
          "lastName": "jdljso",
          "email": "mehul@12563.com",
          "password": "$2b$10$ooogwSUiIybyXNqdXJPyZu0VBXP6FyPIJWqsqD0ui0Cq6fR4QiDzy",
          "profileImage": null
      },
      {
          "_id": 32,
          "firstName": "wwwe",
          "lastName": "wewew",
          "email": "qwer@12356.com",
          "password": "$2b$10$CJJX4AoC.GeJXZyECf2PKOafTkDYYwrL3.VlONG8Ou5nbiIP31nEq",
          "profileImage": null
      },
      {
          "_id": 33,
          "firstName": "sdfd",
          "lastName": "fedfs",
          "email": "qwer@1253.com",
          "password": "$2b$10$H7L7VflYrJOgWlcROLa5BOWiD1wvoj7bFDkti.hSnDRLX2slFLQQm",
          "profileImage": null
      },
      {
          "_id": 34,
          "firstName": "qsa",
          "lastName": "sasa",
          "email": "qw@25.com",
          "password": "$2b$10$x3tsx5JUKLkjbW4zJ5eZxuj7HOcARktsN9q876mLq.9Si9JsmBdsi",
          "profileImage": null
      },
      {
          "_id": 35,
          "firstName": "qwqw",
          "lastName": "wqw",
          "email": "qw@3.com",
          "password": "$2b$10$aKfvuE/nEmm1JL9fIAkNG.Rv8gsJ4DAGq0MsY.OKhb6kKASsaJPuW",
          "profileImage": null
      },
      {
          "_id": 36,
          "firstName": "aasa",
          "lastName": "sasa",
          "email": "asas@1236.com",
          "password": "$2b$10$h0vzMwHtp4JpKn6yBBLuTOPmdbsYHoJBDxTstTzBzTDC8M5bymraG",
          "profileImage": null
      },
      {
          "_id": 37,
          "firstName": "asasa",
          "lastName": "sasa",
          "email": "asa@12.com",
          "password": "$2b$10$xiwKfI6gJZJ1GRrNIYEp5OROltXvuoXyAGaZPDfAkg2k5EYCCnziK",
          "profileImage": null
      },
      {
          "_id": 38,
          "firstName": "asd",
          "lastName": "asd",
          "email": "asd@qwe.com",
          "password": "$2b$10$mNUGKE7ODADQX7bVT49YIOP930IVSLOfp6EUR3J7iW3uA0wn5FdmO",
          "profileImage": null
      },
      {
          "_id": 39,
          "firstName": "asd",
          "lastName": "asd",
          "email": "asd@qwse.com",
          "password": "$2b$10$OIN06ooSN82pdAYhH3deSOdwbniMuFSMIbB5guAtd01bk1QVDsomC",
          "profileImage": null
      },
      {
          "_id": 40,
          "firstName": "qwqww",
          "lastName": "wqwqw",
          "email": "wqww@as.com",
          "password": "$2b$10$FAsfD.q2Ko818B4Rn0aZxuP5fQ4wqoWbOHgWQ2y8U/Obs89KaG6fm",
          "profileImage": null
      },
      {
          "_id": 41,
          "firstName": "qwqww",
          "lastName": "wqwqw",
          "email": "wqwws@as.com",
          "password": "$2b$10$p8FgqjssbiBOQxFdecsd..buu7efiT6o68JSXUGiR0QQxoCQfmGDa",
          "profileImage": null
      },
      {
          "_id": 42,
          "firstName": "qwe",
          "lastName": "rty",
          "email": "ewq@263.com",
          "password": "$2b$10$iLl/Soe1sbalRwIV0AO/A.YYh1GCXp3sgOTrdxRqD7LAsyYJ.TV7i",
          "profileImage": null
      },
      {
          "_id": 43,
          "firstName": "qwe",
          "lastName": "rty",
          "email": "ewqs@263.com",
          "password": "$2b$10$SJJtD26N.cjMt9nUc/lzLuD23Dy9WGdOg16I/Y5B8wr8cGiZ.bDXy",
          "profileImage": null
      },
      {
          "_id": 44,
          "firstName": "esww",
          "lastName": "ewe",
          "email": "qweq@25635.com",
          "password": "$2b$10$cBCZofJJ8f0Bv471FzfGVuvSeAeOUSF3XN2R1XYJyWLFOeIv/ntV2",
          "profileImage": null
      },
      {
          "_id": 45,
          "firstName": "sass",
          "lastName": "dsa",
          "email": "qwer@dsda.com",
          "password": "$2b$10$tJuZ26KA8IDndz1plG.g8uDupDGxAC/H27AmV8UAz4H8lrQC53I46",
          "profileImage": null
      },
      {
          "_id": 46,
          "firstName": "aqwq",
          "lastName": "wqwqw",
          "email": "wqw@123.com",
          "password": "$2b$10$XL17TdLPENohhksyZFOKdudFOyrjEYyO6p8AHnFJQ36W4avlyp7om",
          "profileImage": null
      },
      {
          "_id": 47,
          "firstName": "qwer",
          "lastName": "qwer",
          "email": "qwer@123.com",
          "password": "$2b$10$pTzL84WENSKrvwwdNPrD6ecDq.Z.VrkDUUS1aJ9Pa3iMIFB5s7U6m",
          "profileImage": null
      },
      {
          "_id": 48,
          "firstName": "qwerr",
          "lastName": "rerer",
          "email": "werrwe@253.com",
          "password": "$2b$10$QQVxpHHWKsj1Lom2xgJfFuIGOEWXB6DFhG.8m7KS89zrOBCve75uG",
          "profileImage": null
      },
      {
          "_id": 49,
          "firstName": "SASASA",
          "lastName": "SASA",
          "email": "SAS@DSAD.COM",
          "password": "$2b$10$izUigSVxkvdK9ZYOYH/EPOwI2BxaHt9XBmsBDYjHLrnK6d4B02zFK",
          "profileImage": null
      },
      {
          "_id": 50,
          "firstName": "SASASA",
          "lastName": "SASA",
          "email": "SAS@0DSAD.COM",
          "password": "$2b$10$Ri6Pi4DU2AbadUTHNbF3ReVVCKvYlSxqM2vDouZHeWhmN4M3hplq2",
          "profileImage": null
      },
      {
          "_id": 51,
          "firstName": "EEWE",
          "lastName": "EWEW",
          "email": "wewew@13.com",
          "password": "$2b$10$bGiB6QQV.ndRHpiKUjq..uKU6.RpmID1wAGvbKNBHWU1Rmzhlsi6S",
          "profileImage": null
      },
      {
          "_id": 52,
          "firstName": "wweeeer",
          "lastName": "rerer",
          "email": "rerere@43.COM",
          "password": "$2b$10$j8OO2iKTm8UKZEftgADT.OZ7l2dldKMbGmy4SBK2NQlfRnDVwlJgK",
          "profileImage": null
      },
      {
          "_id": 53,
          "firstName": "vb v",
          "lastName": "fgfg",
          "email": "hnf@f24.com",
          "password": "$2b$10$l2sP4l6n4Zx00KLh6nl1O.wvf20LIC6sa7cGy3JKWGGoTk8lw/wze",
          "profileImage": null
      },
      {
          "_id": 54,
          "firstName": "qwqw",
          "lastName": "wqwq",
          "email": "wqw@1245.com",
          "password": "$2b$10$vM9x6tterKArQDE0xNqwqOsK5HWacG57POJYyYNf1kr4WoN8N1.1y",
          "profileImage": null
      },
      {
          "_id": 55,
          "firstName": "Vimal ",
          "lastName": "Prajapati",
          "email": "vimal@qwe.com",
          "password": "$2b$10$NHDmBv3vp9P9lAXe6V77KuiEcCt7/6GBVJMVeLvgt3TQJUSII5ckS",
          "profileImage": null
      },
      {
          "_id": 56,
          "firstName": "qqq",
          "lastName": "wwqw",
          "email": "ssaasa@123.com",
          "password": "$2b$10$clatgulw8xfqF4HnAT5ANu/nZXbmsRlPcNOxB9pekusXSrWYbDWHu",
          "profileImage": null
      },
      {
          "_id": 57,
          "firstName": "saa",
          "lastName": "sas",
          "email": "as@sa.com",
          "password": "$2b$10$QDBnrshDM.sPBYi9ywRj3.mZU./72aLn8QmUH//lICf4oYHKXPrNm",
          "profileImage": null
      },
      {
          "_id": 58,
          "firstName": "vimal",
          "lastName": "p",
          "email": "admin@1234gmail.com",
          "password": "$2b$10$1x0nhkaZkGTElRrIkgrKXuHfByNuMhTwMaySFKh1cHTf12H/9FhpK",
          "profileImage": "1647940668927.jpg"
      },
      {
          "_id": 59,
          "firstName": "ASAA",
          "lastName": "SASA",
          "email": "adse@123.com",
          "password": "$2b$10$eKdA/5LefkhwvAyG3dbqeehqbID/U8yNKXi7CnYGcz41EZ0WSBCNG",
          "profileImage": null
      },
      {
          "_id": 60,
          "firstName": "Vimal",
          "lastName": "Prajapati",
          "email": "vimal@123.com",
          "password": "$2b$10$Jp6PVZwdx3XJyW.4XE8yKeyrtrI8x1/lo7.gZ6VeW7o9Ar.iXUCYe",
          "profileImage": null
      },
      {
          "_id": 61,
          "firstName": "Vimal",
          "lastName": "Prajapati",
          "email": "temp@temp2.com",
          "password": "$2b$10$J2XF5lTLILShGjkJzICr0OB3cxmDpItXCfB3sYuCk/ebnneJuywGe",
          "profileImage": null
      },
      {
          "_id": 62,
          "firstName": "Mehul",
          "lastName": "pandya",
          "email": "mehulpandiya5@outlook.com",
          "password": "$2b$10$9kH7HYV2S22sPBKt6aXHP.4rCJDYiJU9ZM6yvlHMNz4HpTbJX8EZ.",
          "profileImage": null
      },
      {
          "_id": 63,
          "firstName": "ZXZX",
          "lastName": "DASDAS",
          "email": "ASASA@ASA.COM",
          "password": "$2b$10$3hjGKg37QAemM8O1ZSfDZOKaFYbbRxblaQoLGXyak4Rw1/ByZcSsC",
          "profileImage": null
      },
      {
          "_id": 64,
          "firstName": "mehula",
          "lastName": "PAN",
          "email": "asd@1235.com",
          "password": "$2b$10$/VTTW2mlfeI08VbOt6oIt.QM5rhr9RPoKzt3zKkVqs3oeq.06lNO.",
          "profileImage": null
      },
      {
          "_id": 65,
          "firstName": "Vimal",
          "lastName": "Prajapati",
          "email": "temp@tem.com",
          "password": "$2b$10$vDJVGh00RMn/RviXTOEmlu7AEZik6kZbRwYOrTGdDPFyj2NFy3w/i",
          "profileImage": null
      },
      {
          "_id": 66,
          "firstName": "zxzxzx",
          "lastName": "zxzxzxzx",
          "email": "xzxzxzxx@123.com",
          "password": "$2b$10$ewWw8d1c3ynzbeLVYwmG4O0nI2SJI.bVL0/hp3cBtkhE2jMN.CA3G",
          "profileImage": null
      },
      {
          "_id": 67,
          "firstName": "qwe",
          "lastName": "sasa",
          "email": "sasa@12.com",
          "password": "$2b$10$QHCKmRcWEpT27keFLo2swOVjvuRMu3K9h.Pxj1l1YqvBkqxYorCR6",
          "profileImage": null
      },
      {
          "_id": 68,
          "firstName": "sas",
          "lastName": "sas",
          "email": "sas@123.com",
          "password": "$2b$10$oDcjxwyglnfOn4oPktWjy.qUu/R2lcc1I.PHb80pIyZQ9JPko4CT2",
          "profileImage": null
      },
      {
          "_id": 69,
          "firstName": "a",
          "lastName": "a",
          "email": "aa@12.com",
          "password": "$2b$10$24Mv12eFDl5YrFi26KtK5ujC8j31HYAaGQWukDFozo92FVKSWEIzm",
          "profileImage": null
      },
      {
          "_id": 70,
          "firstName": "SS",
          "lastName": "ASAS",
          "email": "ASS@123.com",
          "password": "$2b$10$j7emREcEl7hD66XE2HaPzOCHO0kG89kkdo4ANAp3VMCTHv/9fcBTO",
          "profileImage": null
      },
      {
          "_id": 71,
          "firstName": "q",
          "lastName": "q",
          "email": "qq2@2.COM",
          "password": "$2b$10$zjzc8tU2EnB5lrNe2S2uWO7qb7jFU.Gzr2TbiJTJfeFz35U30KJTe",
          "profileImage": null
      },
      {
          "_id": 72,
          "firstName": "SSSS",
          "lastName": "SS",
          "email": "S@1.COM",
          "password": "$2b$10$B9fgotZxA3G4iZZz1VNomemjutusK0sHPmWiRsPGibCDvUTmbIfeG",
          "profileImage": null
      },
      {
          "_id": 73,
          "firstName": "SDA",
          "lastName": "SAS",
          "email": "SAS@DFS.COM",
          "password": "$2b$10$j8ATblxEYFlzOU2aVl0Bs.ALdrcHP2KlXAY5sTqAtnTmpxLjP4ee6",
          "profileImage": null
      },
      {
          "_id": 74,
          "firstName": "aaas",
          "lastName": "saa",
          "email": "sas@qwe.com",
          "password": "$2b$10$VT8soicGsi.FAz3kuGZIdeUn4xKhvhExCsFGlGD1GM1ZrctUIRh3G",
          "profileImage": null
      },
      {
          "_id": 75,
          "firstName": "ssa",
          "lastName": "sa",
          "email": "sasa@123.com",
          "password": "$2b$10$.M5dPysjh9/gL0DH4bBTT.RmckByFgunCiXAVNsu5Y19dMXk2xPj6",
          "profileImage": null
      },
      {
          "_id": 76,
          "firstName": "sa",
          "lastName": "sas",
          "email": "sassa@123.com",
          "password": "$2b$10$lwZ8RkO4.0eQon8bgeJ1GuhfcXdSUgwEZCcsgDIj6dVg8Y08WNwGi",
          "profileImage": null
      },
      {
          "_id": 77,
          "firstName": "qwerqwq",
          "lastName": "qwsasqw",
          "email": "qwer@25.com",
          "password": "$2b$10$mK/MHjFoy8BOm94o/VD5p.VLXPhglaTpSW8ILxjPmX46L0RlZFnui",
          "profileImage": null
      },
      {
          "_id": 78,
          "firstName": "milan",
          "lastName": "pandyab",
          "email": "milan@123.com",
          "password": "$2b$10$bNqbc40o7dbRN6Wv7pcqW.T6lZ2EXs.wER.FeNtrMQe8X8Ddqcqe6",
          "profileImage": null
      },
      {
          "_id": 79,
          "firstName": "aa",
          "lastName": "aa",
          "email": "aaaaa@212.com",
          "password": "$2b$10$7INnIDa3fns9CqCf/qoAB.vudLeEO.9f0piCsLgFU5biK2ANINLqK",
          "profileImage": null
      },
      {
          "_id": 80,
          "firstName": "aaaa",
          "lastName": "aaaa",
          "email": "aaaaaaa@212.com",
          "password": "$2b$10$UIS8jEQl9u5B1Clbwz9fxuDcKTEiGQi/h8pm7CkPFoKdyShFMypv2",
          "profileImage": null
      },
      {
          "_id": 81,
          "firstName": "rere",
          "lastName": "reer",
          "email": "erer@23.com",
          "password": "$2b$10$Als4rt6HMB9Dguj9Xj0Oc.CGEIr8GWAlVf6WgZ1Qanrn0Gjkfi/6C",
          "profileImage": null
      },
      {
          "_id": 82,
          "firstName": "Vimal",
          "lastName": "Prajapati",
          "email": "vimal@23.com",
          "password": "$2b$10$rOWOhUaZEcJLfMb.ogkRx.JDZ33ke0Z6A4.AuaOzAvaroRd2LCyXq",
          "profileImage": null
      },
      {
          "_id": 83,
          "firstName": "Vimal",
          "lastName": "Prajapati",
          "email": "VIMAL@456GMAIL.COM",
          "password": "$2b$10$ftM4f/Zu/e/cQDl5Hq0CCer7cw7U/CcK.EEnX4vCQeieKcRq5b7Ve",
          "profileImage": null
      },
      {
          "_id": 84,
          "firstName": "mehul",
          "lastName": "pandya",
          "email": "mehul@789.com",
          "password": "$2b$10$5Gpxx7b1er02oXmtH3uyt.FqeXCrrhr4Cej5c/wO1WlahXxTqmNvi",
          "profileImage": null
      },
      {
          "_id": 85,
          "firstName": "mehul",
          "lastName": "mehul",
          "email": "mehul@7891.com",
          "password": "$2b$10$56a0E6a62SwuPkuH2g7/i.itUg1NXeDDUtTkaoG85M5G0DxMVho2u",
          "profileImage": null
      },
      {
          "_id": 86,
          "firstName": "qaq",
          "lastName": "qq",
          "email": "qqq@12.com",
          "password": "$2b$10$7ZY103IYce.XsEnK4lWR7ez6DmNSTfhOSEhr5KxTRExud7aVFm8r6",
          "profileImage": null
      },
      {
          "_id": 87,
          "firstName": "qww",
          "lastName": "ww",
          "email": "wwwww@qw.com",
          "password": "$2b$10$4VnCZX6ZBRTJbPr7IlqdfehVZWgbzeLZhblj/TKMuDbQT.ivSEWBy",
          "profileImage": null
      },
      {
          "_id": 88,
          "firstName": "www",
          "lastName": "ww",
          "email": "ww@qwq.com",
          "password": "$2b$10$/SVHc8kA.CdiyV6cr5tgMejFoNZ0rrqRkEXgotvCscPd4L8Bp.2tG",
          "profileImage": null
      },
      {
          "_id": 89,
          "firstName": "Vimal",
          "lastName": "Prajapati",
          "email": "temp@gmail.com",
          "password": "$2b$10$k2lLC9DLM904l5NlJryaMeX512LWyts2JEHyn6LYGakFNwqN6bJ9y",
          "profileImage": null
      },
      {
          "_id": 90,
          "firstName": "mehul",
          "lastName": "pandya",
          "email": "mehul@78910.com",
          "password": "$2b$10$ezrlsujgiFn4oWbE9gSNJeO9t59iZW4JZmQyVRKF13Q10iBelVipy",
          "profileImage": null
      },
      {
          "_id": 91,
          "firstName": "mehul",
          "lastName": "Prajapati",
          "email": "mehul@gmail.com",
          "password": "$2b$10$75JipWhrsvvxrhRWxs8m2eISPmBzMrZfUSc64oKxQ4sQ6rxI9SV/G",
          "profileImage": null
      },
      {
          "_id": 92,
          "firstName": "rere",
          "lastName": "rere",
          "email": "rerrerer@qwqw.com",
          "password": "$2b$10$7KVj4SxMzN.W.yPEC825luK3xNb7v241WPQZkF9pl4ifNHnBBjD6i",
          "profileImage": null
      },
      {
          "_id": 93,
          "firstName": "Mehuls",
          "lastName": "Pandyas",
          "email": "mehul@2563.com",
          "password": "$2b$10$AxYhvgSLfbE3n9D5E8psCuezgpuYykfgvmzBB8ocUwV2HOGoFv1XK",
          "profileImage": null
      },
      {
          "_id": 94,
          "firstName": "Manish",
          "lastName": "Parmar",
          "email": "manish@123.com",
          "password": "$2b$10$rdzFf5zCVnQwgvrY6LqVR.PiDFWVqKHVmeb1s6wuanJALTinlPSb2",
          "profileImage": null
      },
      {
          "_id": 95,
          "firstName": "Bhargav",
          "lastName": "Vaghela",
          "email": "bhargav@123.com",
          "password": "$2b$10$1pR6AEsGHsyBpcJ666atr.ruI/wFPPd.lls62EHL3ExMqrE00qja.",
          "profileImage": null
      },
      {
          "_id": 96,
          "firstName": "nishant",
          "lastName": "talvar",
          "email": "nishant@talvar.com",
          "password": "$2b$10$.KVkV2H3DGm1bunlVSeEXOPWMLboHIJ6A8c68CrFOIpsB/CBnbL3m",
          "profileImage": null
      },
      {
          "_id": 97,
          "firstName": "Meet",
          "lastName": "Prajapati",
          "email": "meet@gmail.com",
          "password": "$2b$10$hnBCurpBNJrLlHmtLLVCZ.P6bH3ltSa8lG70QSDAF.WrkDJdKbN2S",
          "profileImage": null
      },
      {
          "_id": 98,
          "firstName": "Vimal",
          "lastName": "Prajapati",
          "email": "temp1@gmail.com",
          "password": "$2b$10$vdkPZboenYW5hB8j4Pyi0u9qWIzrDJVGQnbXN1fjMttmuBj7OtYOS",
          "profileImage": null
      },
      {
          "_id": 99,
          "firstName": "OBJECTS",
          "lastName": "MyObject",
          "email": "Vimal@3003.com",
          "password": "$2b$10$CDVxour8R7fmzHbIqOQFXutKdHA4GxQec5x8XAi9KoSxxj4yrSsl2",
          "profileImage": null
      },
      {
          "_id": 100,
          "firstName": "sasss",
          "lastName": "sas",
          "email": "sas@saa.com",
          "password": "$2b$10$KnCDbB66CPH0.mzpNvklN.osWQuz.ZzZci1hyqkGl7Lj.Taj4glCm",
          "profileImage": null
      },
      {
          "_id": 101,
          "firstName": "xyz",
          "lastName": "zyx",
          "email": "xyz@12.com",
          "password": "$2b$10$MmgCY1LqID3Q.wD18iqBy.jeN70hlyfJxQAVbwFi9Z.1w9ugaj4gK",
          "profileImage": null
      },
      {
          "_id": 102,
          "firstName": "Piyush",
          "lastName": "Prajapati",
          "email": "piyush@123.com",
          "password": "$2b$10$NkZ.yKeOyN81md0eQQL3BOzRcWYdZS9d9TamgjfACXk15nEOxUR.O",
          "profileImage": null
      },
      {
          "_id": 103,
          "firstName": "Vijay",
          "lastName": "Sadhu",
          "email": "vijay.sadhu@imaginato.com",
          "password": "$2b$10$dejzsKZ3nurZ27e9QcHbfO0TdL/Q4zI.Va21OgZAK5NAAn.Xhxyx2",
          "profileImage": null
      },
      {
          "_id": 104,
          "firstName": "aasdsasda",
          "lastName": "dsaads",
          "email": "sdas@sd.com",
          "password": "$2b$10$dSNLOc9xJxJwHRwVhPIuOOypoUEK.ZwUlBwZ.pKfB/M4ruPXTInHy",
          "profileImage": null
      },
      {
          "_id": 105,
          "firstName": "wewe",
          "lastName": "ssqwe",
          "email": "ewe@DEW.COM",
          "password": "$2b$10$rtXyG/yrlYCFTD5pyTQVZuxbsFroTW2Q/CRJIWZSAgaDinzYtqnp2",
          "profileImage": null
      },
      {
          "_id": 106,
          "firstName": "SDSDS",
          "lastName": "SDSDSDS",
          "email": "DGDFGDGD@FF.CC",
          "password": "$2b$10$KRvJK/Oa634t2RCnMLwt1OS/nGxrADP3L7U0PdhLs0jDWBIsGEGvO",
          "profileImage": null
      },
      {
          "_id": 107,
          "firstName": "Vijay",
          "lastName": "0",
          "email": "vijay.sadhu.mi@gmail.com",
          "password": "$2b$10$rbQunydc/GtIsd4OG4XMw.t6OWlG7v8R2EZvl0edeH9p8BH1fT4PS",
          "profileImage": null
      },
      {
          "_id": 108,
          "firstName": "Mehul",
          "lastName": "mejhul",
          "email": "admin@ewq.com",
          "password": "$2b$10$IGeXwF3TNZ0X4ooL5Bc0hOboW/c2N6EJm1dUt3eLcOHTxlmbcy1ey",
          "profileImage": null
      },
      {
          "_id": 109,
          "firstName": "Mehul",
          "lastName": "mejhul",
          "email": "admisn@ewq.com",
          "password": "$2b$10$pO4juvURsX6fSKJaGpfnS.1zpEM.pcZrCKruk7YhwBKYRQ06/pzey",
          "profileImage": null
      },
      {
          "_id": 110,
          "firstName": "asdf",
          "lastName": "aads",
          "email": "qweW@123.com",
          "password": "$2b$10$YpVT.N2N9AhWtX6zZoTB/.mYupuxdYzLFHd94U9zVxMF4ASyf6/J2",
          "profileImage": null
      },
      {
          "_id": 111,
          "firstName": "QWE",
          "lastName": "AA",
          "email": "qw@253.COM",
          "password": "$2b$10$fJuBZYVcchuOgYvcMvhk4e4FkSjeiV9G6fyTBIYkv7jAZmDz9G4zm",
          "profileImage": null
      },
      {
          "_id": 112,
          "firstName": "Vimal",
          "lastName": "Oza",
          "email": "gabbar@123.com",
          "password": "$2b$10$CIB0ytsGPUS0lcgOnKkKcOCIC5IDIr8WkgszXvJlGvEkqn09YlQDS",
          "profileImage": null
      },
      {
          "_id": 113,
          "firstName": "Priyansh",
          "lastName": "patel",
          "email": "priyansh@patel.com",
          "password": "$2b$10$f4FKlYSZR7tyXp5m2a0dH.jMkV3.tWGIt6.u95c54WYDNJ6hYr7TC",
          "profileImage": null
      }
    ];
    await queryInterface.bulkInsert('users', users);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
