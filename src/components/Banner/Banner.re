type bannerTypes = Info
    | Success
    | Warning
    | Danger;

[@genType]
[@react.components]
let make = (~title: string, ~message: string, ~bannerType: bannerTypes) => {
    let bannerClass = switch bannerType {
    | Info => "banner-info"
    | Warning => "banner-warning"
    | Danger => "banner-danger"
    | Success => "banner-success"
    | _ => "banner-default"
    };

    <div className={"banner " ++ bannerClass}>
        <h2 className="banner-title">{React.string(title)}</h2>
        <span className="banner-message">{React.string(message)}</span>
    </div>
}