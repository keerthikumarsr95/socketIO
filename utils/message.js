var generateMessage = (from, text)=>{
    return{
        form,
        text,
        createdAt: new Date.getTime()
    }
}

module.exports = { generateMessage };