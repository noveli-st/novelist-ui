<template>
    <carousel
        :autoplay="true"
        :autoplayTimeout="5000"
        :loop="true"
        :navigationEnabled="false"
        :perPageCustom="[[0, 1]]"
        :scrollPerPage="true"
        :paginationActiveColor="'#007bff'"
        :paginationColor="'#D6D6D6'"
        :paginationPosition="'bottom-overlay'"
        :paginationSize="12"
        class="bg-white"
    >
        <slide>
            <section class="container">
                <div class="row no-gutters align-items-center py-5 slide-step-1" style="height: 480px;">
                    <div class="col-md-6 ml-auto text-center">
                        <header>
                            <span class="mb-0 flex-grow-1 h1" role="heading" aria-level="2">Welcome to seven heaven indie books</span>
                        </header>
                        <p>
                            Quae sint numquam harum optio esse ratione repellat incidunt, necessitatibus, corporis amet adipisci. Maiores dolore saepe at molestias perspiciatis dignissimos nulla corrupti...
                        </p>
                        <footer>
                            <button type="button" class="btn btn-link text-decoration-none my-1 mx-2"><font-awesome-icon icon="info-circle" size="lg" class="mr-2" />More about...</button>
                        </footer>
                    </div>
                </div>
            </section>
        </slide>
        <slide>
            <section class="container">
                <div class="row no-gutters align-items-center py-5 slide-step-2" style="height: 480px;">
                    <div class="col-md-6 ml-auto text-center">
                        <header>
                            <h1>Book your mind<br>to fly so high</h1>
                        </header>
                        <p>
                            Possimus sit illum accusamus? Molestiae deleniti iure quibusdam libero quo voluptatibus praesentium ipsa dolore, iste in, esse culpa magni? Vel, nisi deleniti!
                        </p>
                        <footer>
                            <button type="button" class="btn btn-success my-1 mx-2"><font-awesome-icon icon="handshake" size="lg" class="mr-2" />Join to us</button>
                        </footer>
                    </div>
                </div>
            </section>
        </slide>
        <slide>
            <section class="container">
                <div class="row no-gutters align-items-center py-5 slide-app" style="height: 480px;">
                    <div class="col-md-6 text-center">
                        <header>
                            <h1>Novelist<br>the progressive book player</h1>
                        </header>
                        <p>
                            Quidem repellendus perferendis aliquam excepturi ab aliquid eaque illum non modi, magni, sequi ullam provident eveniet! Perspiciatis praesentium ipsam aspernatur culpa tempore.
                        </p>
                        <footer>
                            <button type="button" class="btn btn-dark my-1 mx-2"><font-awesome-icon :icon="['fab', 'google-play']" size="lg" class="mr-2" />Google Play</button>
                            <button type="button" class="btn btn-dark my-1 mx-2"><font-awesome-icon :icon="['fab', 'app-store']"  size="lg" class="mr-2" />App Store</button>
                        </footer>
                    </div>
                </div>
            </section>
        </slide>
    </carousel>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';

    export default {
        components: {
            Carousel, Slide
        }
    }
</script>

<style scoped>
    .slide-step-1 {
        background-image: url(../../assets/images/slides/novelist-step-1.png);
        background-repeat: no-repeat;
        background-position: left bottom;
        background-size: contain;
    }
    .slide-step-2 {
        background-image: url(../../assets/images/slides/novelist-step-2.png);
        background-repeat: no-repeat;
        background-position: left bottom;
        background-size: contain;
    }
    .slide-app {
        background-image: url(../../assets/images/slides/novelist-app.png);
        background-repeat: no-repeat;
        background-position: right bottom;
        background-size: contain;
    }
    @media screen and (max-width: 767px) {
        .container {
            max-width: 100%;
            width: 100%;
            margin-left: 0;
            margin-right: 0;
        }
        .slide-step-1 {
            background-position: left bottom;
            background-size: cover;
        }
        .slide-step-2 {
            background-position: center top;
            background-size: cover;
        }
    }
</style>