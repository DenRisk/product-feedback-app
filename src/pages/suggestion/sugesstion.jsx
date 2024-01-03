import { Link } from 'react-router-dom'
import Tag from '../../components/tag/tag'
import './suggestions.scss'
import Sort from '../../components/sort/sort'
import Button from '../../components/button/button'
import PlusIcon from '../../assets/icons/icon-plus.svg'
import SuggestionItem from '../../components/suggestion-item/sugesstion-item'
import { useState } from 'react'
import SuggestionMeta from "./components/suggestion-meta/suggestion-meta.jsx";
import SuggestionBoard from "./components/suggestion-board/suggestion-board.jsx";
import SuggestionTags from "./components/suggestion-tags/suggestion-tags.jsx";
import SuggestionRoadmap from "./components/suggestion-roadmap/suggestion-roadmap.jsx";
import SuggestionList from "./components/suggestion-list/suggestion-list.jsx";
import SuggestionControls from "./components/suggestion-controls/suggestion-controls.jsx";
import SuggestionItems from "./components/suggestion-items/suggestion-items.jsx";

export default function Suggestions({ data }) {
  const [selectedCategories, setSelectedCategories] = useState(['all'])
  const [sortCode, setSortCode] = useState('mostupvotes')

  const formattedData = data?.productRequests?.map((item) => {
    return {
      ...item,
      commentsCount: item.comments?.length ?? 0,
    }
  })

  const filteredData = formattedData?.filter(
    (item) =>
      selectedCategories.includes('all') ||
      selectedCategories.includes(item.category)
  )

  const sortedData = filteredData?.slice().sort((a, b) => {
    if (sortCode === 'mostupvotes') {
      return b.upvotes - a.upvotes
    }

    if (sortCode === 'leastupvotes') {
      return a.upvotes - b.upvotes
    }

    if (sortCode === 'mostcomments') {
      return b.commentsCount - a.commentsCount
    }

    if (sortCode === 'leastcomments') {
      return a.commentsCount - b.commentsCount
    }
  })

  function handleCategoryChange(category) {
    if (category === 'all') {
      setSelectedCategories(['all'])
    } else {
      const index = selectedCategories.indexOf('all')
      const newCategories = selectedCategories.slice()

      if (index !== -1) {
        newCategories.splice(index, 1)
      }

      if (newCategories.includes(category)) {
        newCategories.splice(newCategories.indexOf(category), 1)
      } else {
        newCategories.push(category)
      }

      setSelectedCategories(
        newCategories.length === selectedCategories.length - 1
          ? ['all']
          : newCategories
      )
    }
  }

  return (
    <section className='suggestions'>
      <SuggestionMeta>
        <SuggestionBoard />
        <SuggestionTags onHandleCategoryChange={handleCategoryChange} selectedCategories={selectedCategories}/>
        <SuggestionRoadmap suggestions={data?.productRequests}/>
      </SuggestionMeta>
      <SuggestionList>
        <SuggestionControls filteredData={filteredData} sortCode={sortCode} onSetSortCode={setSortCode}/>
        <SuggestionItems sortedData={sortedData}/>
      </SuggestionList>
    </section>
  )
}
