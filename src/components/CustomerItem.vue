<template>
    <div>
        <h1>Customer: {{customer}}, {{age}}</h1>
    </div>
</template>

<script>
export default {
    // props: ['customer']
    // หรือ properties
    props: {
        customer: {
            type: String,
            default: 'Unknown'
        },
        age: {
            type: Number,
            required: true
        },
        money:{
            type: String
        }
    }
}
</script>