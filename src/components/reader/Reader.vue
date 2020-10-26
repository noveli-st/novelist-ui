<template>
    <main class="min-vh-100">
        <article class="container pt-4 pb-3 pt-md-5 hyphens" lang="en">
            <div class="h2 mt-5 mb-3" role="heading" aria-level="2">Chapter #</div>
            <div class="d-flex align-items-center small mb-3">
                <small class="text-nowrap">Title if book {{ bookId }}</small>
                <span class="flex-fill mx-2 border-bottom"></span>
                <small class="text-nowrap">Page 1</small>
            </div>
            <div class="page-1">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius nostrum magnam, temporibus ratione voluptatem at fugit molestias consequatur quia accusantium? Mollitia recusandae error itaque temporibus sit quaerat culpa tempore doloremque.</p>
                <p>Eligendi, similique. Itaque, quaerat nulla sit fuga vitae harum delectus sunt perspiciatis labore quod beatae pariatur quisquam commodi! Consectetur, a nulla illum quas reiciendis eveniet sapiente ad necessitatibus et sit.</p>
                <p>Dolorem, vero soluta possimus ab recusandae, nobis reiciendis repudiandae assumenda repellendus, obcaecati odit harum odio autem quam ipsam maxime corrupti suscipit molestias ratione! Sunt voluptatum officiis id, in consequatur dicta?</p>
                <p>Deserunt, cum aut! Porro, adipisci, at numquam impedit id ratione accusantium facilis et aut nihil praesentium ullam provident ducimus optio perspiciatis aliquam amet nisi minus explicabo corrupti perferendis soluta corporis.</p>
                <p>Necessitatibus enim labore delectus amet pariatur architecto adipisci aliquam impedit officiis optio inventore voluptatem provident, ex incidunt quas, ea ab quaerat est odio, consequatur nihil asperiores. Tenetur id amet accusamus!</p>
                <p>Cum dolore delectus perspiciatis magni nesciunt tempore non, ab sapiente esse, sequi itaque distinctio dolor labore? Necessitatibus omnis ex, voluptate vitae quas praesentium animi quod quis blanditiis deleniti autem molestiae?</p>
                <p>Soluta ab distinctio facilis, doloremque rem ratione repellendus, officiis quasi mollitia consequuntur vel! Illum cum eaque totam commodi perspiciatis minima? Nostrum, totam at! Quasi repellendus saepe quod! Quasi, nisi repellat.</p>
            </div>
        </article>
    </main>
</template>

<script>
    export default {
        name: 'Reader',
        computed: {
            bookId () { return this.$route.params.id }
        }
    }
</script>

<style>

</style>