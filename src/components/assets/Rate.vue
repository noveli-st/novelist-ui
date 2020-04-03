<template>
    <div class="rate" v-if="length > 0">
        <svg style="position: absolute; width: 0; height: 0;" width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <symbol id="icon-star-full" viewBox="0 0 32 32">
                    <!-- <title>star-full</title> -->
                    <path d="M14.3,1.8l-3.9,7.9L1.6,11c-1.6,0.2-2.2,2.2-1.1,3.3l6.3,6.2l-1.5,8.7c-0.3,1.6,1.4,2.8,2.8,2L16,27l7.8,4.1 c1.4,0.7,3-0.4,2.8-2l-1.5-8.7l6.3-6.2c1.1-1.1,0.5-3-1.1-3.3l-8.7-1.3l-3.9-7.9C17,0.4,15,0.3,14.3,1.8L14.3,1.8z"></path>
                </symbol>
            </defs>
        </svg>
        <input type="hidden" :name="name" v-model="rate" :required="required">
        <template v-for="n in length">
            <button :key="n" :class="{'rate-star': true, 'hover': n <= over, 'filled': (n <= rate || isFilled(n))}" @mouseover="onOver(n)" @mouseout="onOut(n)" @click="setRate(n)" @keyup="onOver(n)" @keyup.enter="setRate(n)" :disabled="disabled" type="button">
                <svg class="icon" width="18" height="18" fill="currentColor">
                    <use xlink:href="#icon-star-full"></use>
                </svg>
            </button>
        </template>
        <div class="rate-view" :class="{disabled: disabled}">
            <span class="count" v-if="showcount">{{over}}</span>
            <span class="desc" v-if="ratedesc.length > 0">{{ratedesc[over - 1]}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'rate',
    props: {
        value: {type: [Number, String]},
        name: {type: String, default: 'rate'},
        length: {type: Number},
        showcount: {type: Boolean},
        required: {type: Boolean},
        ratedesc: {type: Array, default () { return [] }},
        disabled: {type: Boolean, default: false},
        readonly: {type: Boolean, default: false}
    },
    data () {
        return {
            over: 0,
            rate: 0
        }
    },
    methods: {
        convertValue(value) {
            if (value >= this.length) {
                value = this.length
            } else if (value < 0) {
                value = 0
            }
            return value
        },
        onOver (index) { if (!this.readonly) this.over = index },
        onOut () { if (!this.readonly) this.over = this.rate },
        setRate (index) {
            if (this.readonly) return false
            this.$emit('before-rate', this.rate)
            this.rate = index
            this.$emit('input', this.rate)
            this.$emit('after-rate', this.rate)
        },
        isFilled (index) { return index <= this.over },
        isEmpty (index) {
            return index > this.over || !this.value && !this.over
        }
    },
    watch: {
        value() {
            this.rate = this.convertValue(this.value)
            this.over = this.convertValue(this.value)
        }
    },
    created () {
        if (this.value >= this.length) {
            this.value = this.length
        } else if (this.value < 0) {
            this.value = 0
        }
        this.rate = this.convertValue(this.value)
        this.over = this.convertValue(this.value)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .icon {
        display: inline-flex;
        position: relative;
    }
    
    .rate {
        display: inline-flex;
        align-items: center;
        cursor: default;
    }
    
    .rate-star {
        color: rgba(0,0,0,.125);
        display: inline-flex;
        padding: .125rem;
        text-decoration: none;
        cursor: pointer;
        background-color: transparent;
        border: 0;
    }
    
    .rate-star .icon {
        top: 0;
        vertical-align: middle;
    }
    
    .rate-star.hover {
        color: rgb(255, 193, 7);
    }
    .rate-star.filled {
        color: rgb(255, 193, 7);
    }
    
    .rate-star:hover, 
    .rate-star:focus{
        text-decoration: none;
    }
    
    .rate-view {

    }
    .rate-view .count, 
    .rate-view .desc {
        /* display: inline-block;
        vertical-align: middle; */
        padding-left: .25em; 
    }
    
    .Rate.has-error .rate-star        { color: rgb(220, 53, 69); }
    .Rate.has-error .rate-star.hover  { color: rgb(255, 193, 7); }
    .Rate.has-error .rate-star.filled { color: rgb(255, 193, 7); }
    
    .rate-star[disabled] {
        /* opacity: 0.75; */
    }
    
    .rate-star.hover[disabled],
    .rate-star.filled[disabled] {
        color: rgb(52, 58, 64, .5);
    }
    
    .rate-view.disabled .count,
    .rate-view.disabled .desc {
        color: rgb(52, 58, 64);
    }
</style>

