package com.udith.text_reader.repository.ocr;

import com.udith.text_reader.model.ocr.Ocr;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface OcrRepository extends MongoRepository<Ocr,String>{
    // Ocr findById();
}