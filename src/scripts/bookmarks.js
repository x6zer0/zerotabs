const createLink = (text, url) => {
  const link = document.createElement("a")

  link.innerText = text
  link.href = url
  link.setAttribute("data-text", text)
  return link
}

const nav = document.getElementById("bookmarks")

export function injectBookmarks(bookmarks) {
  // Remove all existing content before adding new content
  nav.innerHTML = ""

  bookmarks.map(({ label, items }) => {
    const list = document.createElement("ul")

    const groupLabel = document.createElement("label")
    groupLabel.innerText = label
    list.append(groupLabel)

    Object.entries(items).forEach(([name, url]) => {
      const item = document.createElement("li")
      const link = createLink(name, url)
      item.appendChild(link)
      list.appendChild(item)
    })
    nav.appendChild(list)
  })
}
