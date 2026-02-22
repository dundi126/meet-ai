"use client"

import { DataTable } from "@/components/data-table"
import { ErrorState } from "@/components/error-state"
import { LoadingState } from "@/components/loading-state"
import { useTRPC } from "@/trpc/client"
import {  useSuspenseQuery } from "@tanstack/react-query"
import { columns } from "../components/columns"
import { EmptyState } from "@/components/empty-state"

const MeetingsView = () => {
    const trpc = useTRPC()
    const {data} = useSuspenseQuery(trpc.meetings.getMany.queryOptions({}))
  return (
    <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
          <DataTable data={data.items} columns={columns} />
          {
                          data.items.length === 0 && (
                              <EmptyState
                                  title="Create your first meeting"
                                  description="Schedule a meeting to connect with AI. Each meeting lets you to share you state of mind, toughts and interacting with real time agnet"
                              />
                          )
                      }
    </div>
  )
}
 
export default MeetingsView


export const MeetingsViewLoading = () => {
    return (
        <LoadingState
            title="Loading meetings"
            description="Please wait while your meetings is loading..."
        />
    )
}

export const MeetingsViewError = () => {
    return(
        <ErrorState
            title="Error Loading meetings"
            description="Something went wrong"
        />
    )
}