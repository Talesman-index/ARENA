<?xml version="1.0" encoding="UTF-8"?>
<?php
// Ensure it's a POST request
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("HTTP/1.1 405 Method Not Allowed");
    echo json_encode(["success" => false, "error" => "Method not allowed"]);
    exit;
}

// Set JSON headers
header("Content-Type: application/json; charset=UTF-8");

// Get POST parameters
$name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
$email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
$company = isset($_POST['company']) ? strip_tags(trim($_POST['company'])) : '';
$phone = isset($_POST['phone']) ? strip_tags(trim($_POST['phone'])) : '';
$service = isset($_POST['service']) ? strip_tags(trim($_POST['service'])) : '';
$formula = isset($_POST['formula']) ? strip_tags(trim($_POST['formula'])) : '';
$message = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message']), ENT_QUOTES, 'UTF-8') : '';

// Validation
if (empty($name) || empty($email) || empty($company) || empty($phone) || empty($message)) {
    echo json_encode(["success" => false, "error" => "Veuillez remplir tous les champs obligatoires."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "error" => "Adresse email invalide."]);
    exit;
}

// Recipient email
$to = "contact@strategie-arena.com";

// Subject line
$subject = "[Contact Strategy Arena] Demande de " . $company;

// Map values to labels
$service_labels = [
    "diagnostiquer" => "Diagnostiquer mon entreprise (Audit)",
    "structurer" => "Structurer mon organisation",
    "transformer" => "Transformer mes opérations (Digitalisation)",
    "supply-chain" => "Accélérer ma croissance (Logistique)",
    "autre" => "Autre besoin / Demande générale"
];
$service_text = isset($service_labels[$service]) ? $service_labels[$service] : "Non précisé / Autre";

$formula_labels = [
    "prescription" => "Formule Prescription (Audit d'entrée)",
    "pilotage" => "Formule Pilotage (Accompagnement continu)",
    "non-definie" => "Non définie / Ne sait pas"
];
$formula_text = isset($formula_labels[$formula]) ? $formula_labels[$formula] : "Non précisée";

// Build HTML email content
$email_content = "
<html>
<head>
    <title>Nouvelle demande de contact Strategy Arena</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f6f9fc; color: #333333; margin: 0; padding: 20px; }
        .container { max-width: 600px; background-color: #ffffff; margin: 0 auto; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #e1e8ed; }
        .header { background-color: #0F100F; color: #ffffff; padding: 30px; text-align: center; border-bottom: 3px solid #F4E723; }
        .header h1 { margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700; color: #ffffff; }
        .content { padding: 30px; line-height: 1.6; }
        .field-group { margin-bottom: 20px; border-bottom: 1px solid #f0f2f5; padding-bottom: 15px; }
        .field-group:last-child { border-bottom: none; }
        .label { font-size: 11px; font-weight: 700; color: #8898aa; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
        .value { font-size: 15px; color: #2b3a4a; font-weight: 600; }
        .message-box { background-color: #f8f9fa; border-left: 4px solid #F4E723; padding: 15px; border-radius: 4px; margin-top: 5px; font-style: italic; white-space: pre-wrap; font-weight: normal; }
        .footer { background-color: #f8f9fa; padding: 20px; text-align: center; font-size: 12px; color: #8898aa; border-top: 1px solid #e1e8ed; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>Nouvelle Demande Client</h1>
        </div>
        <div class='content'>
            <div class='field-group'>
                <div class='label'>Nom complet</div>
                <div class='value'>$name</div>
            </div>
            <div class='field-group'>
                <div class='label'>Entreprise / Organisation</div>
                <div class='value'>$company</div>
            </div>
            <div class='field-group'>
                <div class='label'>Adresse email</div>
                <div class='value'><a href='mailto:$email'>$email</a></div>
            </div>
            <div class='field-group'>
                <div class='label'>Téléphone (WhatsApp)</div>
                <div class='value'><a href='tel:$phone'>$phone</a></div>
            </div>
            <div class='field-group'>
                <div class='label'>Expertise souhaitée</div>
                <div class='value'>$service_text</div>
            </div>
            <div class='field-group'>
                <div class='label'>Formule choisie</div>
                <div class='value'>$formula_text</div>
            </div>
            <div class='field-group'>
                <div class='label'>Message &amp; Friction opérationnelle</div>
                <div class='value message-box'>$message</div>
            </div>
        </div>
        <div class='footer'>
            Ce message a été envoyé depuis le formulaire de contact de strategie-arena.com
        </div>
    </div>
</body>
</html>
";

// Email headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
$headers .= "From: Formulaire Strategy Arena <contact@strategie-arena.com>" . "\r\n";
$headers .= "Reply-To: $name <$email>" . "\r\n";

// Send email
if (mail($to, $subject, $email_content, $headers)) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => "Désolé, une erreur interne est survenue lors de l'envoi. Veuillez nous contacter directement par WhatsApp ou email."]);
}
exit;
