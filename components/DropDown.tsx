import {useState} from 'react'
import Image from 'next/image';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
interface PageProps {
    list: Array<Country>;
    onSelect: Function
    selected: string;
    codes: any
}

interface Country{
    name: {
        common: string;
    }
    flags: {
        png:string
    }
    altSpellings:Array<string>}
const DropDown = ({ ...props }: PageProps) => {
    const { list, onSelect, selected, codes } = props
    const [collapse, setCollapse] = useState(true)
console.log(selected)
  return (
    <div className='absolute top-3 bg-white'>
          <button className='flex gap-1 items-center' type='button' onClick={() =>{
            setCollapse(!collapse)  
          } }>
              <img src={selected} alt="" className='w-6 ' />
              <ArrowDropDownIcon/>
              
      </button>

      <div
        className={`h-60 overflow-y-scroll bg-white ${
          collapse ? "hidden" : ""
        }`}
      >
              {list.map((item: Country) =>
              {
                //   onSelect(item.flags.png);
                return  (
              <div className="my-3 hover:bg-primary/5 p-1">
                <button
                  key={item.name.common}
                            onClick={() => {
                                onSelect(item.flags.png)
                            setCollapse(true)
                            }}
                  className="flex gap-3 items-center "
                  type="button"
                >
                  <img
                    src={item.flags.png}
                    width={25}
                    height={100}
                    alt=""
                    className="rounded"
                  />
                  <span>
                    {item.name.common} {codes[item.altSpellings[0]]}
                  </span>
                </button>
              </div>
                      )
              }
              
              )}
      </div>
    </div>
  );
}

export default DropDown
