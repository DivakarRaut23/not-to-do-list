import axios from 'axios';

const rootUrl = "/api/v1";

export const createTask =   formData => {
    return new Promise (async(resolve, reject) =>{

        try {
            const response = await axios.post(rootUrl, formData);
            console.log(response.data)
            resolve(response.data)
            
          } catch (error) {
            console.log(error);
            resolve({
                status : "error",
                message : error.message
            })
            
          }


    })

    
}

export const getTaskLists =   () => {
    return new Promise (async(resolve, reject) =>{

        try {

            const {data} = await axios.get(rootUrl);

                       
             resolve(data.result)
            
          } catch (error) {
            console.log(error);
            resolve(false);
            
          }


    })

    
}

export const deleteTaskLists =   (ids) => {
    return new Promise (async(resolve, reject) =>{

        try {
            const {data} = await axios.delete(rootUrl, {data: ids});
            resolve(data)
            
          } catch (error) {
            console.log(error);
            resolve({
                status : "error",
                message : error.message
            })
            
          }


    })

    
}

export const switchTask =   todo => {
    return new Promise (async(resolve, reject) =>{

        try {
            const {data} = await axios.patch(rootUrl, {todo});
            resolve(data)
            
          } catch (error) {
            console.log(error);
            resolve({
                status : "error",
                message : error.message
            })
            
          }


    })

    
}