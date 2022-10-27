import React from 'react'
import { projectdata } from '../components/data/ProjectData'
import { useState } from 'react'

function AddProject() {

    const [name, setName] = useState();
    const [url, setUrl] = useState();

    const handeChangename = (e) => {
        setName({value : e.target.value})
        console.log(name)
    }

    const handeChangeurl = (e) => {
        setUrl({value : e.target.value})
        console.log(url)
    }

    const onClickSubmit = () => {
        projectdata.push({
            name: name,
            url: url
        })
        console.log(name)
        console.log(url)
    }

  return (
    <div>AddProject
    <form>
        <label>
        Name:
            <input type="text" name="name" />
        </label>
        <label>
        Link URL Image:
            <input type="text" name="imageurl" />
        </label>
            <input type="submit" value="Submit" />
        </form>
    </div>
    
  )
}

export default AddProject