<template>
    <div class="BackgroundBox" :style="{background: `url(${img})`}">
        <div class="ContentTextBox">
            <div class="ContentTextBox-text">
                找不到你要的资源!
            </div>
            <div class="ContentTextBox-button">
                <div @click="back" class="ButtonBox">返回</div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'NotFound',
        data() {
            return {
                img: `${process.env.BASE_URL}img/404.jpg`
            }
        },
        methods: {
            back: function () {
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>

    .BackgroundBox {
        height: 100%;
        width: 100%;
        /* Background image is centered vertically and horizontally at all times */
        background-position: center center !important;

        /* Background image doesn't tile */
        background-repeat: no-repeat !important;
        /* Background image is fixed in the viewport so that it doesn't move when
           the content's height is greater than the image's height */
        background-attachment: fixed;

        /* This is what makes the background image rescale based
           on the container's size */
        background-size: cover !important;

        /* Set a background color that will be displayed
           while the background image is loading */
        background-color: #464646;
    }

    .ContentTextBox {
        position: absolute;
        max-width: 300px;
        left: 5%;
        top: 20%;
        z-index: 100;
    }

    @media screen and (max-width: 480px) {
        .ContentTextBox {
            text-align: center;
            max-width: 100%;
            left: 0;
            padding: 0 20px;
        }
    }

    .ContentTextBox-text {
        color: #fff;
        font-family: 'Raleway', sans-serif;
        font-size: 42px;
        font-weight: 800;
        margin-bottom: 30px;
    }

    .ButtonBox {
        background: #00a7f5;
        color: #fff;
        display: inline-block;
        border-radius: 50px;
        -webkit-border-radius: 50px;
        -moz-border-radius: 50px;
        -o-border-radius: 50px;
        font-family: 'Raleway', sans-serif;
        font-size: 14px;
        text-transform: uppercase;
        text-decoration: none;
        transition: all 0.4s;
        -moz-transition: all 0.4s;
        -ms-transition: all 0.4s;
        -webkit-transition: all 0.4s;
        -o-transition: all 0.4s;
        padding: 20px 45px;
    }

    .ButtonBox:hover, .ButtonBox:focus {
        background: #2980b9;
    }

</style>
