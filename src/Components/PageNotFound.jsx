import React from 'react';


function PageNotFound() {


    return (
        <>
            <div class="mx-auto w-full max-w-7xl px-2 md:px-4">
                <div class="mt-2 flex items-center justify-center ">
                    <div class="">
                        <img
                            src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?size=626&ext=jpg&ga=GA1.1.180599784.1691488875&semt=ais"
                            alt="question-mark"
                            class="w-25"
                        />
                        <div>
                            <p class="mt-1 text-sm font-semibold text-black">404 error</p>
                            <h1 class="mt-1 text-2xl font-semibold text-gray-800 md:text-3xl">
                                We can&#x27;t find that page
                            </h1>
                            <p class="mt-1 text-gray-500">
                                Sorry, the page you are looking for doesn&#x27;t exist or has been
                                moved.
                            </p>

                        </div>
                    </div>
                </div>
                <hr />
                <div class="mx-auto flex max-w-7xl justify-center">
                    <footer class="px-4 py-10">
                        <p class="text-base font-semibold text-gray-700">
                            © 2023 Cricktic
                        </p>
                        <span class="font-bold">www.cricktic.com</span>
                    </footer>
                </div>
            </div>

        </>
    );
}

export default PageNotFound;
