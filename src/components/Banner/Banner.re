[@genType]
[@react.components]
let make = (~title: string, ~message: string) => {
    <div className="banner">
        <h2>{React.string(title)}</h2>
        {React.string(message)}
    </div>
}