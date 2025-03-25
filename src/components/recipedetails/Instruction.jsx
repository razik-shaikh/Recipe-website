import React from "react";

function Instruction({ detail }) {
    // ✅ Safely handle YouTube URL
    const youtubeEmbedUrl = detail.strYoutube 
        ? detail.strYoutube.replace("watch?v=", "embed/") 
        : null;

    return (
        <div style={{ fontFamily: "Roboto" }} className="max-w-4xl mx-auto p-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
                <ol className="list-decimal list-inside space-y-4">
                    <li className="flex items-start">
                        <span>{detail.strInstructions || "No instructions available."}</span>
                    </li>
                </ol>

                {/* ✅ Only show video section if a YouTube link exists */}
                {youtubeEmbedUrl ? (
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-4">
                            <i className="fas fa-video mr-2" /> Watch how to make it
                        </h3>
                        <div className="relative w-full pb-[56.25%]">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src={youtubeEmbedUrl}
                                title="YouTube video player"
                                frameBorder="0"
                                allowFullScreen
                                loading="lazy"
                            />
                        </div>
                    </div>
                ) : (
                    <p className="text-gray-500 mt-4">No video available for this recipe.</p>
                )}
            </div>
        </div>
    );
}

export default Instruction;
