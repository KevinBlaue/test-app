export default function Tutorial() {
    const exampleText = 'Dies ist ein schlechtes Beispiel'

    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
            <BadExampleText title={exampleText}/>
            <GoodExampleText title={'Dies ist ein gutes Beispiel'}/>
        </section>
    )
}

function Profile() {
    return (
        <img
            src="https://i.imgur.com/MK3eW3Am.jpg"
            alt="Katherine Johnson"
        />
    )
}


function BadExampleText(props: any) {
    return (
        <p>{props.title}</p>
    );
}

function GoodExampleText(props: { title: string }) {
    return (
        <p>{props.title}</p>
    );
}
