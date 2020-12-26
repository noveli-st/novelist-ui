<template>
    <main class="min-vh-100" v-bind:class="colorMode">
        <article
            class="mt-2 pt-4 pt-md-5 pb-3 hyphens"
            v-bind:class="pageWidth"
            v-on:click="handlerArticle($event)"
            lang="en"
        >
            <div class="h2 mt-5 mb-3" role="heading" aria-level="2">Chapter #</div>
            <section class="page-1">
                <header class="d-flex align-items-center small mb-3">
                    <small v-if="$parent.$refs.reader.book" class="text-nowrap">{{ $parent.$refs.reader.book.title }}</small>
                    <span class="flex-fill mx-2 border-bottom"></span>
                    <small class="text-nowrap">Page 1</small>
                </header>
                <div v-bind:class="textSize">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius nostrum magnam, temporibus ratione voluptatem at fugit molestias consequatur quia accusantium? Mollitia recusandae error itaque temporibus sit quaerat culpa tempore doloremque.</p>
                    <p>Eligendi, similique. Itaque, quaerat nulla sit fuga vitae harum delectus sunt perspiciatis labore quod beatae pariatur quisquam commodi! Consectetur, a nulla illum quas reiciendis eveniet sapiente ad necessitatibus et sit.</p>
                    <p>Dolorem, vero soluta possimus ab recusandae, nobis reiciendis repudiandae assumenda repellendus, obcaecati odit harum odio autem quam ipsam maxime corrupti suscipit molestias ratione! Sunt voluptatum officiis id, in consequatur dicta?</p>
                    <p>Deserunt, cum aut! Porro, adipisci, at numquam impedit id ratione accusantium facilis et aut nihil praesentium ullam provident ducimus optio perspiciatis aliquam amet nisi minus explicabo corrupti perferendis soluta corporis.</p>
                    <figure class="text-center">
                        <img class="img-fluid rounded" alt="Lorem ipsum dolor sit amet, consectetur adipisicing elit" src="https://i.kinja-img.com/gawker-media/image/upload/s--MrLx7ocP--/c_scale,f_auto,fl_progressive,q_80,w_800/l5luskqeprim7l1llid2.jpg" data-type="gallery" data-image="https://i.kinja-img.com/gawker-media/image/upload/s--MrLx7ocP--/c_scale,f_auto,fl_progressive,q_80,w_800/l5luskqeprim7l1llid2.jpg">
                        <figcaption class="small">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</figcaption>
                    </figure>                
                    <p>Necessitatibus enim labore delectus amet pariatur architecto adipisci aliquam impedit officiis optio inventore voluptatem provident, ex incidunt quas, ea ab quaerat est odio, consequatur nihil asperiores. Tenetur id amet accusamus!</p>
                    <p>Cum dolore delectus perspiciatis magni nesciunt tempore non, ab sapiente esse, sequi itaque distinctio dolor labore? Necessitatibus omnis ex, voluptate vitae quas praesentium animi quod quis blanditiis deleniti autem molestiae?</p>
                    <p>Soluta ab distinctio facilis, doloremque rem ratione repellendus, officiis quasi mollitia consequuntur vel! Illum cum eaque totam commodi perspiciatis minima? Nostrum, totam at! Quasi repellendus saepe quod! Quasi, nisi repellat.</p>
                </div>
            </section>
            <section class="page-2">
                <header class="d-flex align-items-center small mb-3">
                    <small v-if="$parent.$refs.reader.book" class="text-nowrap">{{ $parent.$refs.reader.book.title }}</small>
                    <span class="flex-fill mx-2 border-bottom"></span>
                    <small class="text-nowrap">Page 2</small>
                </header>
                <div v-bind:class="textSize">
                    <p>Necessitatibus est maiores obcaecati molestiae dolores ullam cum mollitia molestias laborum quibusdam, expedita dolore explicabo repudiandae rem nulla doloremque, tenetur sint fugiat minus dolorem? Ratione facere corrupti necessitatibus distinctio ea?</p>
                    <p>Autem dolorum rem vel nulla molestiae, natus odio doloribus itaque, suscipit praesentium neque quia quisquam amet doloremque corrupti delectus quae similique? Dolor nam sapiente voluptatem minus nihil perferendis molestias odit?</p>
                    <p>Excepturi ab, dolorum nam aperiam voluptate odio possimus eveniet explicabo deserunt expedita, quam vel sint, porro iste nostrum laudantium culpa tempora. Nam quidem non iste at recusandae eos autem fugit?</p>
                    <p>Voluptates ipsum saepe fuga aperiam cumque illo accusantium, nulla neque incidunt dolore debitis officia totam id perspiciatis veniam asperiores corporis dolores sunt soluta laborum eaque libero. Blanditiis perspiciatis quis minima.</p>
                    <p>Alias, voluptatem nam soluta dicta at dolor, modi accusantium incidunt minima illum, qui tenetur! Labore modi ipsum eum, saepe quidem id voluptatum magni, eveniet itaque esse magnam voluptatibus at culpa!</p>
                    <p>Placeat ipsum dolores eum repellendus accusamus suscipit aperiam est ducimus, ex at explicabo doloribus excepturi obcaecati, dolorem dicta sapiente animi vel ut praesentium, quae mollitia aliquam! Odio ut architecto culpa?</p>
                    <p>Nemo expedita qui sint. Commodi nostrum quibusdam molestias eius obcaecati quas laborum nesciunt perferendis dolores alias nulla minus cupiditate sit magnam at doloremque culpa sequi sed nisi est, fugiat minima.</p>
                    <p>Numquam, delectus consequatur quisquam cum unde doloribus exercitationem? Ullam sapiente inventore aliquid iusto hic provident sint, expedita cum soluta at cupiditate laborum animi incidunt beatae ad tempore aspernatur consequuntur commodi?</p>
                </div>
            </section>
        </article>
        <footer class="pb-5">
            <div class="container mb-3 text-center">
                <button class="btn btn-block border-0 mb-3" v-bind:class="btnColorMode" type="button"><font-awesome-icon icon="arrow-alt-circle-down" class="mr-2" />Read more</button>
                <div class="d-flex justify-content-between">
                    <button class="btn border-0" v-bind:class="btnColorMode" type="button" disabled><font-awesome-icon icon="angle-double-left" size="lg" /><span class="d-none d-sm-inline-block ml-2">Prev</span></button>
                    <div class="btn-group">
                        <button class="btn border-0" v-bind:class="btnColorMode" type="button">1</button>
                        <button class="btn border-0" v-bind:class="btnColorMode" type="button">2</button>
                        <button class="btn border-0" v-bind:class="btnColorMode" type="button">3</button>
                        <button class="btn border-0" v-bind:class="btnColorMode" type="button">4</button>
                        <button class="btn border-0" v-bind:class="btnColorMode" type="button">5</button>
                    </div>
                    <button class="btn border-0" v-bind:class="btnColorMode" type="button"><span class="d-none d-sm-inline-block mr-2">Next</span><font-awesome-icon icon="angle-double-right" size="lg" /></button>
                </div>                
            </div>
        </footer>
    </main>
</template>

<script>
// https://www.vuescript.com/expand-image-full-size/
    export default {
        name: 'Reader',
        computed: {
            bookId() { return this.$route.params.id },
            colorMode() {
                if(this.$parent.settings.reader.colorMode === 'gray')
                    return 'bg-secondary text-white'
                if(this.$parent.settings.reader.colorMode === 'dark')
                    return 'bg-dark text-white'
                return ''
            },
            textSize() {
                if(this.$parent.settings.reader.textSize === 'middle')
                    return 'font-size-125'
                if(this.$parent.settings.reader.textSize === 'big')
                    return 'font-size-150'
                return ''
            },
            pageWidth() {
                return this.$parent.settings.reader.pageWidth === 'responsive' ? 'container' : 'container-fluid'
            },
            btnColorMode() {
                return this.$parent.settings.reader.colorMode === 'gray' ? 'btn-light' : 'btn-secondary'                
            }
        },
        methods: {
            handlerArticle(event) {
                console.log(event.target.tagName)
            }
        }
    }
</script>

<style>

</style>