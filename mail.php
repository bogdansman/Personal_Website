<?php

// use the name in html "name"
$nume = $_POST['nume'];
$telefon = $_POST['telefon'];
$email = $_POST['email'];
$mesaj = $_POST['mesaj'];


// echo"
// Nume: $nume <br>
// Telefon: $telefon <br>
// Email: $email <br>
// Mesaj: $mesaj
// ";

$to      = 'mitran_bogdan@outlook.com';
$subject = 'Contact one-page';
$message = "
$nume 
$telefon
$email
$mesaj";
$headers = 'From: contact@raffe.ro' . "\r\n" .
           'Reply-To: contact@raffe.ro' . "\r\n" .
           'X-Mailer: PHP/' . phpversion();
mail($to, $subject, $message, $headers);

echo "Mesajul a fost trimis cu succes!! Va multumim! :)";


?>


<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta name="description" content="Affrodable and professional web design">
    <meta name="keywords" content="web design, affordable web design, professioanl web design">
    <meta name="author" content="Mitran Constantin Bogdan">
    <title>Bobans Web Design | About</title>
    <link rel="stylesheet" href="css/stylee.css">
</head>
<body>
    <header>
        <div class="container">
            <div id="branding">
                <h1><span class="highlight">Bobans</span> Web Design</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li class="current"><a href="about.html">About</a></li>
                    <li><a href="services.html">Services</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section id="newsletter">
        <div class="container">
            <h1>Subscribe To Our Newsletter</h1>
            <form>
                <input type="email" placeholder="Enter Email">
                <button type="submit" class="button_1">Subscribe</button>
            </form>
        </div>
    </section>
    <section id="main">
        <div class="container">
            <article id="main-col">
                <h1 class="page-title">About Us</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a purus non mauris volutpat mattis vitae nec nibh. Sed tristique
                    magna id arcu malesuada, id sagittis erat efficitur. Sed eget massa quis magna bibendum faucibus a et
                    quam. Donec congue maximus quam eu vestibulum. Quisque arcu nibh, porttitor at blandit sit amet, fringilla
                    a ante. Quisque elementum eget justo dapibus aliquam. Pellentesque eros sem, facilisis in ligula pulvinar,
                    facilisis ullamcorper nisi. Vivamus interdum aliquam efficitur. Sed quis dolor quis leo auctor finibus.
                </p>
                <p class="dark">
                    Quisque ultricies nulla in risus pellentesque, vitae varius risus volutpat. Nunc eget dignissim urna. Praesent suscipit imperdiet
                    dui, in ultricies felis maximus non. Aenean aliquet dapibus ante vitae dictum. Morbi nibh massa, aliquet
                    ut lacinia vitae, tincidunt at justo. Aliquam erat volutpat. Morbi in eros auctor, condimentum justo
                    a, facilisis mauris. Duis sit amet mauris sit amet felis consequat dignissim. Duis hendrerit consequat
                    lorem eu varius. Suspendisse tincidunt id urna at fermentum. Donec gravida aliquet purus et tempus. Nulla
                    facilisi. Proin vel arcu pretium, faucibus risus sit amet, dapibus eros.
                </p>
            </article>
            <article>

                <aside id="sidebar">
                    <div class="dark">
                        <h3>What We Do</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius auctor lacus nec feugiat. Phasellus
                            sit amet ex ipsum. Praesent pharetra tincidunt tempor. Etiam velit eros, dapibus eget porta in,
                            lacinia et magna. Nam eget eros non orci consectetur congue at ac augue. Proin eget arcu in enim
                            feugiat ultricies. Curabitur maximus metus nec metus pretium viverra at et orci. Integer hendrerit
                            ante ut placerat cursus.</p>
                </aside>
                </div>

            </article>
        </div>
        </div>
    </section>

    <footer>
        <p>Bobans Web Design, Copyright &copy; 2017</p>
    </footer>
</body>

</html>