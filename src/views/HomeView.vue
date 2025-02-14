<template>
  <div class="home">
    <nav>
      <div class="logo"><img src="@/assets/images/logo1.png" alt="" /></div>
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <a href="#about">About</a>
        <a href="#footer-container">Contact</a>
      </div>
      <div class="nav-btn">
        <router-link to="/login"><button class="btn1">Login</button></router-link>
        <router-link to="/signup"><button class="btn2">SignUp</button></router-link>
      </div>
    </nav>

    <div class="hero">
      <div class="hero-text">
        <h1>
          Your Skills, <span>Your Story,</span> <span>Your Portfolio.</span>
        </h1>
        <p>
          Welcome to PortPlate Official Website. <br />
          We are your number one-stop solution for building <br />
          a professional and personalized portfolio website with ease.
        </p>
        <router-link to="/signup"
          ><button class="btn3">Get Started</button></router-link
        >
        <div class="hero-users">
          <div>
            <h3>+10k</h3>
            <p>
              No of registered <br />
              users on our platform
            </p>
          </div>
          <div>
            <h3>+15k</h3>
            <p>
              No of portfolios created <br />
              using our platforms
            </p>
          </div>
        </div>
      </div>
      <div class="hero-img"><img src="@/assets/images/hero.png" alt="" /></div>
    </div>

    <!-- about -->
    <section id="about">
      <div class="about-img">
        <img src="@/assets/images/about.png" alt="" />
      </div>
      <div class="about-text">
        <h3>About Us</h3>
        <h1>
          Empowering You <br />
          to Showcase <br />
          Your Story
        </h1>
        <p>
          Whether you're a developer looking to showcase your skills, a
          freelancer wanting to stand out, or a recent graduate aiming to make
          an impression, our platform is here to help. With our dynamic
          portfolio builder, you can create a stunning, customized online
          presence that highlights your unique talents—all in just a few clicks!
        </p>
        <router-link to="/"
          ><button class="btn4">Learn More</button></router-link
        >
      </div>
    </section>

    <!-- features -->
    <div class="features">
      <button>Features</button>
      <div class="text">
        <h1>
          Discover Our All-in-One <br />
          Portfolio Solution
        </h1>
        <p>
          Our platform provides a full suite of tools and features that empower
          you to create a professional portfolio with ease. Designed to cater to
          developers, freelancers, and job seekers, we make it easy to build,
          customize, and share a standout portfolio that showcases your skills
          and achievements.
        </p>
      </div>
      <div class="card">
        <div class="card1">
          <img src="@/assets/images/card1.png" alt="" />
          <h1>Real-time preview</h1>
          <p>
            Experience instant feedback as you input your details. Watch your
            portfolio come to life in real-time with live previews that let you
            see your work take shape immediately.
          </p>
        </div>
        <div class="card2">
          <img src="@/assets/images/card2.png" alt="" />
          <h1>Professional Templates</h1>
          <p>
            Choose from a variety of beautifully designed templates. Each
            template is crafted to highlight your unique strengths and present
            your work in a polished, professional manner.
          </p>
        </div>
        <div class="card3">
          <img src="@/assets/images/card3.png" alt="" />
          <h1>Easy Sharing and Export Options</h1>
          <p>
            Share your portfolio with a personalized link or download it in
            CV-ready format. Either for job applications or networking, your
            portfolio is always ready when you need it.
          </p>
        </div>
      </div>
    </div>

    <div class="workflow-container">
      <div class="workflow">
        <div class="workflow-text">
          <h1>
            Our workflow guides you effortlessly from profile setup to portfolio
            sharing, ensuring every step is smooth, customizable, and tailored
            to bring out the best of your professional journey.
          </h1>
          <router-link to="/signup"
            ><button class="btn5">Grab your slot!</button>
          </router-link>
        </div>
        <div class="workflow-img">
          <img src="@/assets/images/workflow.svg" alt="" />
        </div>
      </div>
      <div class="big-text">
        <h1>WORKFLOW</h1>
      </div>
    </div>

    <div class="account">
      <div class="account-img">
        <img src="@/assets/images/account.png" alt="" />
      </div>
      <div class="account-text">
        <h1>
          Create an account in <br />
          10 minutes
        </h1>
        <p>
          A quick setup, easy verification, and you're ready to explore our
          templates and build a stunning professional portfolio that truly
          reflects you!
        </p>
        <router-link to="/signup"
          ><button class="btn6">Get Started</button></router-link
        >
      </div>
    </div>

    <section id="footer-container">
      <footer>
        <div class="footer-link">
          <a href="">Product</a>
          <a href="">About Us</a>
          <a href="">Templates</a>
          <a href="">Contact</a>
        </div>
        <div class="footer-image">
          <img src="@/assets/images/logo2.png" alt="" />
        </div>
        <p>Your skills, your story, your portfolio</p>
        <div class="footer-social">
          <a href=""><img src="@/assets/images/facebook.png" alt="" /></a>
          <a href=""><img src="@/assets/images/twitter.png" alt="" /></a>
          <!-- <a href=""><img src="@/assets/images/instagram.png" alt="" /></a> -->
          <a href=""><img src="@/assets/images/youtube.png" alt="" /></a>
        </div>
      </footer>
      <div class="rights">
        <hr>
        <p>Copyright©2024 | PortPlate. All rights reserved.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@import "../assets/views-styles/home.css";
</style>
