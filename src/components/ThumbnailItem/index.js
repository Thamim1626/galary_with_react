import './index.css'

const ThumbnailItem = props => {
  const {eachItem, hoverFunc, isActive} = props
  const {id, thumbnailAltText, imageAltText} = eachItem
  const thumHover = () => {
    hoverFunc(id, imageAltText)
  }
  const isClass = isActive === true ? 'opacity' : 'none '
  return (
    <li className="card">
      <button type="button" onClick={thumHover}>
        <img
          src={eachItem.thumbnailUrl}
          className={isClass}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
