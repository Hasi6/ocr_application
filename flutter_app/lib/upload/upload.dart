// import 'package:flutter/material.dart';
// import 'dart:io';

// import 'package:image_picker/image_picker.dart';
// import 'package:dio/dio.dart';



// Widget _buildUploadBtn() {
//     void upload() async{
//         String fileName = _imageFile.path;
        
//         print(fileName);
//         setState(() {
//           this._isReceved = true;
//         });

//         try{
//           FormData formData = new FormData.from({"image": new UploadFileInfo(_imageFile,fileName)});
//           Dio dio = new Dio();
//            response = await dio.post('http://192.168.43.118:5000/api/addImage', data:formData);
//           setState(() {
//             text = response.data.toString();
//           });
//           // var state = response.data;//////////############################################################ handle response
          
//         }catch(err){
//             print(err.message);
//         }
//     }
//     Widget btnWidget = Container();
//     if (_isUploading) {
//       // File is being uploaded then show a progress indicator
//       btnWidget = Container(
//           margin: EdgeInsets.only(top: 10.0),
//           child: CircularProgressIndicator());
//     } else if (!_isUploading && _imageFile != null) {
//       // If image is picked by the user then show a upload btn
//       btnWidget = Container(
//         margin: EdgeInsets.only(top: 10.0),
//         child: RaisedButton(
//           child: Text('Upload'),
//           onPressed: () {
//             upload();
//           },
//           color: Colors.pinkAccent,
//           textColor: Colors.white,
//         ),
//       );
//     }
//     return btnWidget;
//   }