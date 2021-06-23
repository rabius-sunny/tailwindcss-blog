import { lectures } from '../../../fakedata'
let lecture = lectures.slice(0, 3)

const Lectures = () => {
    return (
        <div className="container mx-auto py-8">
            <div className="grid grid-cols-12 gaps-2">

                {/* Left Portion  */}
                <div className="p-4 grid lg:col-span-8 col-span-12">
                    <div className="bg-gray-100 text-center">
                        <div className="flex justify-center"><img className="w-full" src={lectures[0].thumbnail} alt="book" /></div>
                        <div><h1 className="text-xl">{lectures[0].name} - 1</h1></div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-3">
                        {
                            lecture.map(lecture => (
                                <div className="p-4">
                                    <div><img src={lecture.thumbnail} alt="lecture" /></div>
                                    <div>
                                        <p><b>{lecture.name}</b></p>
                                        <p>{lecture.description.slice(0, 50)}...</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* Right Portion */}
                <div className="p-4 lg:grid md:flex lg:col-span-4 gap-4 col-span-12">
                    <div className="bg-gray-100 text-center">
                        <div className=""><img className="w-full" src={lectures[0].thumbnail} alt="book" /></div>
                        <div><h1 className="text-xl">{lectures[0].name}</h1></div>
                    </div>
                    <div className="">
                        {
                            lecture.map(lecture => (
                                <div className="flex pb-4">
                                    <img className="lg:w-1/2 md:w-1/4 h-24" src={lecture.thumbnail} alt="lecture" />
                                    <div className="pl-4">
                                        <p><b>{lecture.name}</b></p>
                                        <p>{lecture.description.slice(0, 50)}...</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lectures
