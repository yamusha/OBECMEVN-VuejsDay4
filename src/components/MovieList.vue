<template>
    <div>
        <p>
            <input v-model="query" type="text" class="input">
        </p>
        <hr>
        <div v-for="(row, idx) in chunkMovies" :key="idx" class="columns">
            <movie-item :movie="each" v-for="each in row" :key="each.id" />
        </div>
    </div>
</template>

<script>
import _ from 'lodash'
import { movies } from '../db.json'
import MovieItem from './MovieItem'

export default {
    components: {
        'movie-item': MovieItem
    },
    data() {
        return {
            query: ''
        }
    },
    computed: {
        chunkMovies() {
            const pattern = new RegExp(this.query, 'i')
            const filterMovies = movies.filter(each => {
                // return each.title === this.query
                return pattern.test(each.title)
            })

            return _.chunk(filterMovies, 3)
        }
    }
}
</script>