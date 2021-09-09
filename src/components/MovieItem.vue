<template>
    <div>
        <pre>
            
        <button class="button is-rounded is-info is-success">
            <span class="icon is-small">
      <i class="fas fa-bold"></i>
    </span>
            {{movie.title+" "+movie.year}}</button>
            <img class="box" :src="'./images/'+movie.id+'.jpg'" :alt="movie.title" >
        </pre>
    </div>
</template>

<script>
export default {
    // props: ['customer']
    // หรือ properties
    props:['movie']
}
</script>