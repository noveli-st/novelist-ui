<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
        <title>{{ $parent.book.title }}: {{ $parent.book.author.name }}<text v-if="$parent.book.discount"> - discount {{ $parent.book.discount }}%</text></title>
        <template v-if="$parent.book.discount">
            <polygon fill="#D4145A" opacity=".9" points="0,128 128,0 256,0 0,256" filter="drop-shadow(0 .125rem .25rem rgba(0,0,0,.75))"></polygon>
            <text fill="#ffffff" font-weight="bold" font-size="90" transform="translate(55 182) rotate(-45)">{{ $parent.book.discount }}%</text>
        </template>
    </svg>
</template>