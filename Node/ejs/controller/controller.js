const homeControl=(req,res)=>{

    const fata={
        "name":'sidd'
    }
    res.render('index.ejs',fata)
}

export {homeControl}