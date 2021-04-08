import React from 'react'
import Input from '../../Components/Input'

class InputForm extends React.Component{
   
    state={
        form: {
            name : {
                inputDetails:{
                    placeholder: 'Name',
                    required : true,
                    type : 'text'
                },
                inputType : 'input',
                 value : '',
            },
            lastname : {
                inputDetails:{
                    placeholder: 'Last Name',
                    required : true,
                    type : 'text'
                },
                inputType : 'input',
                 value : '',
            },
            email: {
                inputDetails:{
                    placeholder: 'Email Address',
                    required : true,
                    type : 'email'
                },
                inputType : 'input',
                 value : '',
            },
            phoneNumber: {
                inputDetails:{
                    placeholder: 'Phone Number',
                    required : true,
                    type : 'number'
                },
                inputType : 'input',
                 value : '',

            },
            age: {
                inputDetails:{
                    placeholder: 'Your Age',
                    required : true,
                    type : 'number'
                },
                inputType : 'input',
                 value : '',

            },

        }
    }

    onChangedHandler = (event, id) =>{
        console.log(event.target.value, id)
        const updatedFormData = {
            ...this.state.form
        }
        const updatedFormElement = {...updatedFormData[id]}
        updatedFormElement.value = event.target.value;
        updatedFormData[id] = updatedFormElement;
        this.setState({
            form: updatedFormData
        })

    }

    render() {
        const formData = []
        for (let key in this.state.form){
            formData.push({
                id : key,
                config: this.state.form[key]
            })
        }

        return (
          <form>
              {formData.map(input => <Input key={input.id} config={input.config} changed={(event) => this.onChangedHandler(event, input.id)}/>)}
          </form>
            
        )
    }
}
export default InputForm;