import Link from 'next/link';

type Props = {
    goTo: 'string';
}
function Back({goTo}: Props) {
    console.log(goTo);
    return (
        <Link className="back" href={goTo}>
            Til Baka
        </Link>
    )
}

export default Back