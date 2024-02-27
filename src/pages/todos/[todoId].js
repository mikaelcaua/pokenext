import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Todo() {
    const router = useRouter();
    const todoId  = router.query.todoId;

    return (
        <>
            <Link href="/">Voltar</Link>
            <h1>Exibindo o Todo: {todoId}</h1>
            {console.log(todoId)}
            <p>Comentário: la la la<Link href={`${todoId}/comments/1`}>Detalhes</Link></p>
        </>
    );
}
