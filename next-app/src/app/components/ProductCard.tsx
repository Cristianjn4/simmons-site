type Props= {
    name: string
    desc: string
}


export function Item({name,desc}: Props){
    return(

        <div>
                   
              <h3 className="mt-4 text-sm text-gray-700">{desc}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{name}</p>
        </div>
    )
}