import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { cn } from '@/lib/utils';
interface RichTextRendererProps {
  content: string;
  className?: string;
}
const components = {
  h1: ({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-bold tracking-tight mb-6 mt-8',
        className
      )}
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        'scroll-m-20 text-3xl font-semibold tracking-tight mb-4 mt-6',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        'scroll-m-20 text-2xl font-semibold tracking-tight mb-4 mt-6',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        'scroll-m-20 text-xl font-semibold tracking-tight mb-3 mt-5',
        className
      )}
      {...props}
    >
      {children}
    </h4>
  ),
  p: ({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        'leading-7 text-gray-700 mb-4 [&:not(:first-child)]:mt-4',
        className
      )}
      {...props}
    >
      {children}
    </p>
  ),
  ul: ({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)}
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={cn('my-6 ml-6 list-decimal [&>li]:mt-2', className)}
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLLIElement>) => (
    <li
      className={cn('text-gray-700', className)}
      {...props}
    >
      {children}
    </li>
  ),
  blockquote: ({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        'mt-6 border-l-2 border-gray-200 pl-6 italic text-gray-700',
        className
      )}
      {...props}
    >
      {children}
    </blockquote>
  ),
  a: ({
    children,
    className,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn(
        'font-medium text-blue-600 underline underline-offset-4 hover:text-blue-500',
        className
      )}
      target='_blank'
      rel='noopener noreferrer'
      {...props}
    >
      {children}
    </a>
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <div className='my-6'>
      <img
        className={cn('rounded-lg border', className)}
        alt={alt}
        {...props}
      />
      {alt && <p className='text-sm text-gray-500 mt-2 text-center'>{alt}</p>}
    </div>
  ),
  pre: ({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn(
        'mb-4 mt-6 overflow-x-auto rounded-lg border bg-gray-50 py-4',
        className
      )}
      {...props}
    >
      {children}
    </pre>
  ),
  code: ({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        'relative rounded bg-gray-100 px-[0.3rem] py-[0.2rem] font-mono text-sm',
        className
      )}
      {...props}
    >
      {children}
    </code>
  ),
  table: ({
    children,
    className,
    ...props
  }: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className='my-6 w-full overflow-y-auto'>
      <table
        className={cn('w-full border-collapse text-sm', className)}
        {...props}
      >
        {children}
      </table>
    </div>
  ),
  th: ({
    children,
    className,
    ...props
  }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    >
      {children}
    </th>
  ),
  td: ({
    children,
    className,
    ...props
  }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    >
      {children}
    </td>
  ),
};
export function RichTextRenderer({
  content,
  className,
}: RichTextRendererProps) {
  return (
    <MDXProvider components={components}>
      <div className={cn('prose prose-gray max-w-none', className)}>
        {content}
      </div>
    </MDXProvider>
  );
}
