package com.udith.text_reader.controller.ocr;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.multipart.MultipartFile;

import net.sourceforge.tess4j.ITesseract;
import net.sourceforge.tess4j.Tesseract;
import net.sourceforge.tess4j.TesseractException;

import java.awt.*;
import java.awt.image.*;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

import javax.imageio.ImageIO;

import com.udith.text_reader.service.FileServer;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/Ocr")
public class OcrController{

	@Autowired
	private FileServer fileserver;

    @PostMapping(value="/read")
    public String postMethodName(@RequestParam("Image") MultipartFile image) {
        

		ITesseract instance = new Tesseract();

		try {
			File inputFile = fileserver.convert(image);
			BufferedImage in = ImageIO.read(inputFile);

			BufferedImage newImage = new BufferedImage(in.getWidth(), in.getHeight(), BufferedImage.TYPE_INT_ARGB);
            
			instance.setDatapath("D:\\notes\\Design\\project\\text_reader\\tessdata");
			instance.setLanguage("eng");
			Graphics2D g = newImage.createGraphics();
			g.drawImage(in, 0, 0, null);
			g.dispose();

			String result = instance.doOCR(newImage);

			inputFile.delete();
			return result;
		} catch (TesseractException | IOException e) {
			return "Error while reading image";
		}
    }
    
    
} 