<?php
// Default page title if not set
$pageTitle = isset($pageTitle) ? $pageTitle : 'The Lonely Chapter';
// Default current page if not set (for active nav link)
$currentPage = isset($currentPage) ? $currentPage : 'home';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $pageTitle; ?></title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="./css/custom.css">
    <link rel="icon" type="image/png" href="img/tlc.webp">
</head>
<body>
<!-- Header - Liquid Glass Style -->
<header id="header" class="liquid-glass">
    <div class="glass-blur"></div>
    <div class="container">
        <div class="header-container">
            <a href="/index.php" class="logo">
                <img src="img/tlc_small.webp" alt="The Lonely Chapter" class="header-logo">
            </a>
            <div class="nav-toggle" id="navToggle">
                <div class="hamburger-icon">
                    <span></span>
                    <span></span>
                </div>
            </div>
            <nav class="main-nav" id="mainNav">
                <ul>
                    <li><a href="/index.php" class="<?php echo ($currentPage == 'home') ? 'active' : ''; ?>">Home</a></li>
                    <li><a href="#journey" class="<?php echo ($currentPage == 'journey') ? 'active' : ''; ?>">Journey</a></li>
                    <li><a href="#services" class="<?php echo ($currentPage == 'services') ? 'active' : ''; ?>">Services</a></li>
                    <li><a href="#testimonials" class="<?php echo ($currentPage == 'testimonials') ? 'active' : ''; ?>">Testimonials</a></li>
                    <li><a href="#contact" class="<?php echo ($currentPage == 'contact') ? 'active' : ''; ?>">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>
</header>