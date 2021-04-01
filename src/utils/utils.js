import MarkdownIt from 'markdown-it'

export function mdToHtml (markdown) {
  const md = new MarkdownIt()
  return md.render(markdown)
}

export function getFullUrl (url) {
  return `${process.env.GRIDSOME_API_URL}${url}`
}

