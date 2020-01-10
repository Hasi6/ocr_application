import 'package:flutter/material.dart';
import 'package:ocrmob/HomePage/HomePage.dart';

void main() => runApp(MyApp());
class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Image Upload Demo',
        theme: ThemeData(primarySwatch: Colors.pink),
        home: HomePage());
  }
}
