import { PropTypes, Component } from 'react'

const tahoeResorts = [
  "Alpine Meadows",
  "Boreal",
  "Diamond Peak"
]

class Autocomplete extends Component {
  get value() {
    return this.refs.inputResort.value
  }

  set value(inputValue) {
    this.refs.inputResort.value = inputValue
  }

  render() {
    return (
      <div>
        <input ref="inputResort" type="text" list="tahoe-resorts" />
        <datalist id="tahoe-resorts">
          {this.props.options.map(
            (opt, i) => <option key={i}>{opt}</option>)}
        </datalist>
      </div>
    )
  }
}

export const AddDayForm = ({resort, date, powder, backcountry, onNewDay }) => {
  
  let _resort, _date, _powder, _backcountry

  const submit = (e) => {
    e.preventDefault()
    onNewDay({
      resort: _resort.value,
      date: _date.value,
      powder: _powder.value,
      backcountry: _backcountry.value,
    })

    _resort.value = ''
    _date.value = ''
    _powder.checked = false
    _backcountry.checked = false
  }


    return (
      <form onSubmit={submit} className="add-day-form">

        <label htmlFor="resort">Resort Name</label>
        <Autocomplete options={tahoeResorts}
                ref={input => _resort = input}
         />

        <label htmlFor="date">Date</label>
        <input  id="date"
                type="date"
                required
                defaultValue={date}
                ref={input => _date = input}
        />
        
        <div>
          <label htmlFor="resort">Powder Day</label>
          <input  id="powder"
                  type="checkbox"
                  required
                  defaultChecked={powder}
                  ref={input => _powder = input}
          />
        </div>

        <div>
          <label htmlFor="resort">Backcountry Day</label>
          <input  id="backcountry" 
                  type="checkbox"
                  defaultChecked={backcountry}
                  ref={input => _backcountry = input}
          />
        </div>
        <button>Add Day</button>
      </form>
    )
}

AddDayForm.defaultProps = {
  resort: "Kirkwood",
  date: "2017-02-02",
  powder: true,
  backcountry: false
}

AddDayForm.propTypes = {
  resort: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  powder: PropTypes.bool.isRequired,
  backcountry: PropTypes.bool.isRequired
}