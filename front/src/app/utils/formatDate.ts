
export function formatDate(date: Date) {
    return Intl.DateTimeFormat('pr-br').format(date);
}