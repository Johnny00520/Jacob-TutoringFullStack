// Array of object

export default () => {
    return [
        {
            title: 'Click to view Studying',
            description: 'You should maximize the effectiveness of your time spent studying English by practicing correctly. In general, follow these recommendations as a guide for what to focus on when practicing',
            style: 'success',
            header: 'Studying',
            url: '#',
            catagories: [
                {
                    subtitle: 'Vocabulary',
                    catagoriesLists: [
                        {
                            catagoriesDescription: 'In language, without vocabulary, nothing else matters.'
                        },
                        {
                            catagoriesDescription: 'Try to learn at least 5-10 new words per day (more than 50 per day is possible).'
                        },
                        {
                            catagoriesDescription: 'Study vocabulary correctly. Look at example sentences and practice using new vocabulary.'
                        }
                    ]
                },
                {
                    subtitle: 'Listening and Reading',
                    catagoriesLists: [
                        {
                            catagoriesDescription: 'If you want to get better at speaking, listen more. If you want to get better at writing, read more.'
                        }
                    ]
                },
                {
                    subtitle: 'Writing, Speaking, and Conversation',
                    catagoriesLists: [
                        {
                            catagoriesDescription: 'Practice in the context/situation that is most important for your needs and goals.'
                        }
                    ]
                },
                {
                    subtitle: 'Grammar',
                    catagoriesLists: [
                        {
                            catagoriesDescription: 'As a beginner, you will need some basic grammar instruction to understand how to structure and use the language. As an advanced student, you don’t need to study much grammar except for problem areas.'
                        },
                        {
                            catagoriesDescription: 'In general, do not spend more than 10% of your studying efforts on grammar unless you have a very specific need for grammar improvement.'
                        }
                    ]
                }
            ]
        },
        {
            title: 'Click to view Vocabulary',
            description: '',
            style: 'info',
            header: 'Vocabulary',
            url: '#',
            catagories: [
                {
                    // subtitle: '',
                    catagoriesLists: [
                        {
                            catagoriesDescription: 'The 2000 most common words in English typically make up about 70% to 80% of any conversation or piece of writing. Make sure you know all of these words no matter what level you are:',
                            url: 'https://www.talkenglish.com/vocabulary/top-2000-vocabulary.aspx'
                        }
                    ]
                },
                {
                    catagoriesLists: [
                        {
                            catagoriesDescription: 'The “Oxford Picture Dictionary” is a great resource for learning new vocabulary with pictures (this is a physical book that you can buy on Amazon or elsewhere):',
                            url: 'https://www.amazon.com/slp/oxford-picture-dictionary/rfd47aj64ydk59e'
                        }
                    ]
                },
                {
                    catagoriesLists: [
                        {
                            catagoriesDescription: 'Learning academic vocabulary is essential for English language students that plan on going to college or university:',
                            url: 'https://www.examenglish.com/vocabulary/academic_wordlist.html'
                        }
                    ]
                },
                {
                    catagoriesLists: [
                        {
                            catagoriesDescription: 'Business vocabulary is important for English language learners that use English at their jobs or places of business:',
                            url: 'http://www.manythings.org/vocabulary/lists/z/'
                        },
                        {
                            catagoriesDescription: '',
                            url: 'http://www.businessenglishresources.com/learn-english-for-business/student-section/business-vocabulary/'
                        }
                    ]
                }
            ]
        },
        {
            title: 'Click to view Reading and Listening',
            description: 'Try these websites for practicing reading and listening comprehension:',
            style: 'success',
            header: 'Reading and Listening Resources',
            url: '#',
            catagories: [
                {
                    catagoriesLists: [
                        {
                            url: 'https://esl-lab.com/'
                        },
                        {
                            url: 'http://www.elllo.org/'
                        },
                        {
                            url: 'https://www.rong-chang.com/'
                        },
                        {
                            url: 'https://www.eslfast.com/'
                        },
                        {
                            url: 'http://www.manythings.org/listen/'
                        },
                        {
                            url: 'https://breakingnewsenglish.com/'
                        },
                        {
                            url: 'https://www.simpleenglishnews.com/'
                        }
                    ]
                }
            ]
        },
        {
            title: 'Click to view Grammar',
            description: '',
            style: 'info',
            header: 'Grammar Resources',
            url: '#',
            catagories: [
                {
                    catagoriesLists: [
                        {
                            catagoriesDescription: 'For looking up specifics about grammar, I often like to use English Club’s grammar portion of their website:  ',
                            url: 'https://www.englishclub.com/grammar/'
                        },
                        {
                            catagoriesDescription: 'I also recommend buying a grammar book for English language learner’s that want to improve their grammar. The grammar books I recommend are:',
                            bookAuthors: [
                                {
                                    bookNauthor: '“Practical English Usage” by Michael Swan"'
                                },
                                {
                                    bookNauthor: '“Understanding and Using English Grammar” by Betty Azar"'
                                }
                            ]
                        },
                        {
                            catagoriesDescription: 'I also like to read Grammar Girl for interesting articles and information about grammar and English in general:     ',
                            url: 'https://www.quickanddirtytips.com/grammar-girl'
                        },
                    ]
                }
            ]
        },
        {
            title: 'Click to view Assessment Tests',
            description: 'Take these computer tests and assess your current level of english:',
            style: 'success',
            header: 'Assessment Tests',
            url: '#',
            catagories: [
                {
                    catagoriesLists: [
                        {
                            url: 'https://www.oxfordonlineenglish.com/english-level-test/'
                        },
                        {
                            url: 'https://learnenglish.britishcouncil.org/en/content'
                        }
                    ]
                }
            ]
        }
    ]
}