import React from 'react'

//Tạo ra 1 thẻ <FucntionComponent />>
export default function FunctionComponent() {

    // Lệnh return chứa giao diện của thẻ. 
    // Lưu ý: giao diện của thẻ phải cùng nằm trong cùng 1 thẻ
    // thường là thẻ div
    return (
        <section className="p-2 bg-dark">
            <div className="text-white display-2">Title</div>
            <div className="text-white display-4">Content content content content</div> 
        </section>
    )
}
