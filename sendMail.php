<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
        case("POST"): //Send the email;
            header("Access-Control-Allow-Origin: *");
            // Payload is not send to $_POST Variable,
            // is send to php:input as a text
            $json = file_get_contents('php://input');
            //parse the Payload from text format to Object
            $params = json_decode($json);
    
            $email = $params->email;
            $first_name = $params->firstName;
            $last_name = $params->lastName;
            
            $message = $params->message;
            $phone = $params->telephone;
            $subjectText = $params->subject;

    
            $recipient = 'info@merch24.eu';  
            $subject = "Contact From <$email>";
            $message = "
                <strong>Von:</strong> $first_name  $last_name<br>
                <strong>Email:</strong> $email<br>
                <strong>Telefon:</strong> $phone<br>
                <strong>Betreff:</strong> $subjectText<br><br>
                <strong>Nachricht:</strong><br>
                $message
";
    
            $headers   = array();
            $headers[] = 'MIME-Version: 1.0';
            $headers[] = 'Content-type: text/html; charset=utf-8';

            // Additional headers
            $headers[] = "From: noreply@mywebsite.com";

            mail($recipient, $subject, $message, implode("\r\n", $headers));
            break;
        default: //Reject any non POST or OPTIONS requests.
            header("Allow: POST", true, 405);
            exit;
    } 
