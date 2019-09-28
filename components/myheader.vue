<template>
    <div class="header">
        <b-container>
            <nuxt-link to="/"><img src="/img/logo.png" alt="logo" id="header_logo"></nuxt-link>
            <div style="font-size: 0.8rem;">
                <b-nav tabs justified>
                    <b-nav-item to="/about" exact exact-active-class="active">About</b-nav-item>
                    <b-nav-item to="/works" exact exact-active-class="active">Works</b-nav-item>
                    <b-nav-item to="/articles" exact exact-active-class="active">Articles</b-nav-item>
                    <b-nav-item to="/contact" exact exact-active-class="active">Contact</b-nav-item>
                </b-nav>
            </div>
        </b-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>

<style>
.header {
    margin: 30px 0;
    text-align: center;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 700;
}

#header_logo {
    width: 30%;
    margin-bottom: 30px;
}
</style>