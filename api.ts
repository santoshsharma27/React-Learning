export async function handleAcceptTnC(isTermsAccepted: boolean) {
  try {
    const response = await fetch("/api/terms-and-conditions-acl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isTermsAccepted }),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      return { success: true };
    } else {
      return { success: false, error: result.error || "Unknown error" };
    }
  } catch (error) {
    console.error("Error calling TnC API:", error);
    return { success: false, error: "Failed to call TnC API: ", error };
  }
}

export const validateProjectName = async (projectName: string) => {
  try {
    const response = await fetch("/api/campaign/check-name", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: projectName,
      }),
    });
    const result = await response.json();

    if (response.ok) {
      return { success: true, response: result };
    } else {
      return { success: false, error: result.message };
    }
  } catch (error) {
    return {
      success: false, error: "Failed to call TnC API: ", error
    };
  }
};

export const handleSavePdfToGcp = async (projectType: string, file: File) => {
  try {
    const formData = new FormData();
    formData.append("inputFile", file as unknown as File);
    const response = await fetch(`/api/project/${projectType}/brief-upload`, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (response.ok) {
      return { success: true, response: result };
    } else {
      return { success: false, error: result.message };
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      success: false,
      error: "We’re unable to upload your brief right now. Please try again later.",
    };
  }
};

export const extractDataFromBrief = async (fileURL: string, projectId?: string) => {
  try {
    const requestBody = {
      fileURL,
    };

    const response = await fetch("/api/creative-kb", {
      method: "POST",
      headers: getHeaders(projectId),
      body: JSON.stringify(requestBody),
    });
    const data = response?.json ? await response.json() : null;

    if (!response.ok) {
      throw data ?? new Error("Failed to extract data from brief");
    }

    return data;
  } catch (error) {
    console.error("Error in extractDataFromBrief:", error);
    throw error;
  }
};

export const uploadFileToGcp = async (file: File, contentType: string) => {
  try {
    const formData = new FormData();
    formData.append("inputFile", file as unknown as File);
    formData.append("fileType", contentType);
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (response.ok) {
      return { success: true, response: result };
    } else {
      return { success: false, error: result.message };
    }
  } catch (error) {
    return {
      success: false,
      error: `Failed to upload file: ${error}`,
    };
  }
};

export const submitStepOne = async (projectType: string, requestBody: StepOneSubmit | StepTwoData) => {
  try {
    const response = await fetch(`/api/project/${projectType}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    const result = await response.json();

    if (response.ok) {
      return { success: true, response: result };
    } else {
      return { success: false, error: result.message, result };
    }
  } catch (error) {
    return { success: false, error: `Failed to submit: ${error}` };
  }
};

export const patchProject = async (
  projectType: string,
  id: string,
  requestBody: StepOneSubmit | StepTwoData | StepThreeData | GenerateImagePayload | StepThreePatch | ProjectDataPayload,
) => {
  try {
    const response = await fetch(`/api/project/${projectType}/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    const result = await response.json();

    if (response.ok) {
      return { success: true, response: result };
    } else {
      return { success: false, error: result.message, result };
    }
  } catch (error) {
    return { success: false, error: `Failed to patch: ${error}` };
  }
};

export const deleteProject = async (projectType: string, id: string) => {
  try {
    const response = await fetch(`/api/project/${projectType}/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      const result = await response.json();
      return { success: true, data: result };
    } else {
      console.error("Failed to delete project:", await response.text());
      return { success: false };
    }
  } catch (error) {
    console.error("Error deleting project:", error);
    return { success: false };
  }
};

export const getBriefUploadResponse = async (projectType: string, projectId: string) => {
  try {
    const response = await fetch(`/api/project/${projectType}/${projectId}/image-list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response?.json ? await response.json() : null;

    if (!response.ok) {
      throw data ?? new Error("Failed to get the data from brief");
    }

    return data;
  } catch (error) {
    console.error("Error in extractDataFromBrief:", error);
    throw error;
  }
};

export const validateRAICheck = async (body: RaiValidationPayload[], projectId: string) => {
  try {
    const response = await fetch("/api/rai-check", {
      method: "POST",
      headers: getHeaders(projectId),
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Failed to get the RAI check");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in RAI check API:", error);
    throw error;
  }
};

export const handleGenerateConcepts = async (requestBody: RequestBodyConcepts, projectId: string) => {
  try {
    const { brand_id } = requestBody;

    if (!validBrandIds.includes(brand_id as string)) {
      throw new Error(`Invalid brand_id: ${brand_id}. Must be one of ${validBrandIds.join(", ")`});
    }

    const response = await fetch("/api/generate-concepts", {
      method: "POST",
      headers: getHeaders(projectId),
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      console.error("Error: Failed to generate concepts");
      return { success: false, error: await response.json() };
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error("Error in handleGenerateConcepts:", error);
    return { success: false, error };
  }
};

export const handleRaiRequest = async (requestBody: RaiValidationPayload[], projectId: string) => {
  try {
    const response = await fetch("/api/rai-check", {
      method: "POST",
      headers: getHeaders(projectId),
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      console.error("Error: Failed to generate concepts");
      return { success: false, error: await response.json() };
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error("Error in handleGenerateConcepts:", error);
    return { success: false, error };
  }
};

export const handleGenerateOutputRequest = async (
  projectType: string,
  projectId: string,
  requestBody?:
    | { creativeKb?: object; brandKb?: object; audienceKb?: object; channelKb?: object; promptText?: string }
    | PdpCopyPayload
    | null,
) => {
  try {
    const response = await fetch(/api/project/${projectType}/${projectId}/generate-outputs, {
      method: "POST",
      headers: getHeaders(projectId),
      body: JSON.stringify(requestBody),
    });

    const data = response?.json ? await response.json() : null;

    if (!response.ok) {
      throw data ?? new Error(Failed to generate outputs. Status: ${response.status});
    }

    return data;
  } catch (error) {
    console.error("Error in handleGenerateOutputRequest:", error);
    throw error;
  }
};

export const handleSaveDataToDB = async (
  projectType: string,
  projectId: string,
  outputId: string,
  requestBody: { [key: string]: string | string[] | null | object },
) => {
  try {
    const response = await fetch(/api/project/${projectType}/${projectId}/generate-outputs/${outputId}, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    const result = await response.json();

    if (response.ok) {
      return { success: true, response: result };
    } else {
      return { success: false, error: result.message, result };
    }
  } catch (error) {
    return { success: false, error: Failed to patch: ${error} };
  }
};

export const checkRaiGeneratedOutputs = async (projectType: string, projectId: string, payload = {}) => {
  try {
    const response = await fetch(/api/project/${projectType}/${projectId}/generated-outputs-rai-check, {
      method: "POST",
      headers: getHeaders(projectId),
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(SERVER_CALL_FAILED);
    }
    return await response.json();
  } catch (error) {
    console.error("Error making server call:", error);
    throw error;
  }
};

export const getFileData = async (gsUrl: string) => {
  if (!gsUrl) return;
  try {
    const response = await fetch("/api/stream-gcs-file", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ gsUrl }),
    });

    if (response.ok) {
      const buffer = await response.arrayBuffer();
      const uint8Array = new Uint8Array(buffer);
      const binaryData = uint8Array.buffer;

      return { success: true, data: binaryData };
    } else {
      console.error("Error fetching file data:", response.statusText);
    }
  } catch (error) {
    console.error("Error fetching file data:", error);
  }
};

export const fileDownload = async (
  payload: {
    gsUrls: string[];
    metadata?: {
      projectName?: string;
      projectVersion?: number;
    };
  },
  filename: string,
) => {
  if (!payload?.gsUrls.length) return;

  try {
    const response = await fetch("/api/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const blob = await response.blob();
      downloadFile(blob, filename);
      return { success: true };
    } else {
      console.error("Error downloading file:", response.statusText);
    }
  } catch (error) {
    console.error("Error downloading file:", error);
  }
};

export const handleSortAndSavedWork = async (queryParams: SortingQueryParams = {}) => {
  try {
    const queryString = new URLSearchParams(
      Object.entries(queryParams).reduce(
        (acc, [key, value]) => {
          if (value !== undefined) {
            acc[key] = value.toString();
          }
          return acc;
        },
        {} as Record<string, string>,
      ),
    ).toString();

    const response = await fetch(/api/project?${queryString}, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(Failed to fetch saved work: ${response.statusText});
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching saved work:", error);
    return { success: false, error };
  }
};

export const handleIsFavoriteIsArchive = async (payload: { projectIds: string[]; isFavorite?: boolean; isArchived?: boolean }) => {
  try {
    const cleanPayload = Object.fromEntries(Object.entries(payload).filter(([value]) => value !== undefined));

    const response = await fetch("/api/project", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cleanPayload),
    });

    if (!response.ok) {
      throw new Error(Failed to update project status: ${response.statusText});
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating project status:", error);
    return { success: false, error };
  }
};

export const handleTranslate = async (requestBody: TranslationRequest, projectId: string) => {
  try {
    const response = await fetch("/api/translate", {
      method: "POST",
      headers: getHeaders(projectId),
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(Failed to translate. Status: ${response.status});
    }

    return await response.json();
  } catch (error) {
    console.error("Error in handleTranslate:", error);
    throw error;
  }
};

export const submitFeedback = async (
  requestBody: {
    thought: string;
    detailOptions: string[];
    additionalFeedback?: string;
  },
  projectId: string,
  projectType: string,
) => {
  try {
    const response = await fetch(/api/project/${projectType}/${projectId}/feedback, {
      method: "POST",
      headers: getHeaders(projectId),
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error("Server call failed");
    }
    return await response.json();
  } catch (error) {
    console.error("Error making server call:", error);
    return null;
  }
};




